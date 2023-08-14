const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { resolve } = require('path');

// Replace if using a different env file or config
const env = require('dotenv').config({ path: 'server/.env' });

const stripe = require('stripe')("sk_test_51NeOT0HTpipZpGrATpfXLmOvCqkcjDIoXEq2P02Sm50v3acRjvlvNsClgDfrF4Htjys9mO3ykAydHPCqr7cjBpwv00XK4NLqtA", {
  apiVersion: '2022-08-01',
});

// Serve static files from the "public" directory
app.use(express.static(resolve(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo'] });
});

app.use(bodyParser.json());
app.listen(5000, () => {
  console.log('Server on port 5000');
});

app.get('/config', (req, res) => {
  res.send({
    publishableKey: "pk_test_51NeOT0HTpipZpGrAoTJk4h2HMD1JKodIe0ZHg1eoG6SenDXxYF4pdUCS33uJV3SFOb612eSl6SRE8joW42lBiiWg0020ufJ4HX",
  });
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'krw',
      amount: amount,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.post('/api/send-data', (req, res) => {
    const receivedData = req.body; // This is the entire request body
    const data = receivedData.data; // Extracting the "data" property from the body
  
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully' });
  });

  
