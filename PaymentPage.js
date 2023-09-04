import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";

function PaymentPage(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config")
      .then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      })
      .catch(error => {
        console.error('Error fetching config:', error);
      });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify({
        amount: 50000, // Replace with the actual amount in cents
      }),
    })
      .then(async (r) => {
        const { clientSecret } = await r.json();
        setClientSecret(clientSecret);
      })
      .catch(error => {
        console.error('Error creating payment intent:', error);
      });
  }, []);


  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default PaymentPage;
