import {React, useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import {Button, Container, NavBar, Modal, Offcanvas} from 'react-bootstrap'
import { CartContext } from '../CartContext';
import CartProduct from '../components/CartProduct';
import SendOrder from '../components/SendOrder';
import { productsArray } from '../productStore';
import Sidebar from './Sidebar';
import '../App.css'
import { useClosestMedia } from '../components/test';


function NavBarPage() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showName, setShowName] = useState(false);
  const handleCloseName = () => setShowName(false);
  const handleShowName = () => setShowName(true);
  
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNameSubmit = (firstName, lastName) => {
    // Handle the form submission, e.g., store the names in state or send to server
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
  };
  // console.log(JSON.stringify({items: cart.items}))

  
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




  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsMenuOpen(false);
  //     setShowSidebar(false);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
  //       document.getElementById('menu-btn').addEventListener('click', toggleMenu);
  //     } else {
  //       document.getElementById('menu-btn').removeEventListener('click', toggleMenu);
  //       setIsMenuOpen(false);
  //       setShowSidebar(false);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   // Initial setup
  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  

  return (
    <header className="header">
      <section className="flex">
        <Link to="/home" className="logo">
          <img src="images/menu.png" alt="Logo" />
        </Link>
        {/* <!-- <h1>Café IEUM</h1> --> */}
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/home">집</Link>
          <Link to="/about">우리에 관해서</Link>
          <Link to="/menu">메뉴</Link>
          <Link to="/gallery">갤러리</Link>
          <Link to="/store">팀</Link>
          <Link to="/contact">접촉</Link>
          <Button onClick={toggleSidebar} >Cart ({productsCount} Items)</Button>
        </nav>
        
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {productsCount > 0 ?
              <>
                <p>Items in your cart</p>
                {cart.items.map((currentProduct, idx) => (
                  // <h1>{currentProduct.title}</h1>
                  <>
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                  
                  </>
                  
                  
                ))}
                <h1>Total: {Number(cart.getTotalCost()).toFixed(2)}</h1>
                <SendOrder id={cartItems} checkout={checkout}/>
              </>
              :
              <h1>There are no items in your cart!</h1>
            }
            {/* Sidebar content */}
            {/* You can use the SidebarContent component here */}
          </Offcanvas.Body>
        </Offcanvas>
        <Modal show={showName} onHide={handleCloseName}>
            <Modal.Header closeButton>
                <Modal.Title>Please Enter your name:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SendOrder id={cartItems}/>
                <Button variant='success' onClick={checkout}>
                  Purchase items!
                </Button>
            </Modal.Body>
        </Modal>



        <div id="menu-btn" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} ></div>
      </section>
    </header>
  );
}

export default NavBarPage;
