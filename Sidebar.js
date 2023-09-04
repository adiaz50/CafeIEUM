import { Fragment, useState, React, useContext, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'; 

import { CartContext } from '../CartContext';
import CartProduct from '../components/CartProduct';
import SendOrder from '../components/SendOrder';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Sidebar({ isOpen, childToParent}) {
  
  return (
    <Profile
      isOpen={isOpen}
      key={isOpen}
      childToParent={childToParent}
    />
  );
}

function Profile({ isOpen, childToParent}) {
  // const {userId} = bool;
  const [someC, setSomeC] = useState(isOpen);

  const cart = useContext(CartContext);

  

  var cartItems = []; 

  for(let i = 0; i < cart.items.length;){
    
    cartItems.push(cart.items[i]);
    // console.log("SOMETHINGAF: ", cart.items[i]);
    i++
  }

  const checkout = async () =>{
    await fetch('http://localhost:5000/checkout', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({items: cart.items})
    }).then((response) =>{
      return response.json()
    }).then((response) => {
      if(response.url){
        window.location.assign(response.url); // Forwarding user to Stripe
      }
    })
  }
  const productsCount = cart.items.reduce((sum, product) => sum+ product.quantity, 0);
  
  return (
    <Transition.Root show={someC} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => childToParent(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-dark-theme shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h1 className="font-medium text-white">Shopping cart</h1>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-white hover:text-gray-500"
                            onClick={() => childToParent(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {productsCount > 0 ?
                        <>
                          {cart.items.map((currentProduct, idx) => (
                            // <h1>{currentProduct.title}</h1>
                            <>
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            
                        </>
                            
                            
                          ))}
                          {/* <h1>Total: {Number(cart.getTotalCost()).toFixed(2)}</h1> */}
                          {/* <SendOrder id={cartItems} checkout={checkout}/> */}
                        </>
                        :
                        <h3 className='text-white'>There are no items in your cart!</h3>
                      }
                      </div>

                      {/* <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a >{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div> */}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-1 sm:px-6">

                    <SendOrder id={cartItems} checkout={checkout}/>
                      {/* <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => childToParent(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}





{/* <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a >{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div> */}
































// import React, { useState, useContext } from "react";
// import {db } from "../database";
// import { addDoc, and, collection, serverTimestamp, deleteDoc } from "firebase/firestore";
// import { CartContext } from "../CartContext";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Col from 'react-bootstrap/Col';
// import { getProductData } from "../productStore";
// import {Button, Container, NavBar, Modal} from 'react-bootstrap';

// function Sidebar(){
    

//   return (
//     <>
//         <Modal>
//             <Modal.Header>
//                 <Modal.Title>Please Enter your name:</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 efjiejfief
//             </Modal.Body>
//         </Modal>
//     </>
//   );
// };
// export default Sidebar;

{/* <form onSubmit={(event) => sendOrder(event)} >
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="mb-3"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button> 
      </form> */
    }

    
{/* <Modal>
                  <Modal.Header show={inputShow} onHide={handleCloseInput}>
                    <Modal.Title>Please Enter your name:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      {cart.items.map((currentProduct, idx) => (
                      <SendOrder id={currentProduct.id} quantity={currentProduct.quantity}/>
                    ))}
                  </Modal.Body>
                </Modal> */}


