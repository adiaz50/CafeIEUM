import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Facility from './Facility';
import Menu from './Menu';
import Gallery from './Gallery';
import Team from './Team';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Footer from './Footer';
import PaymentPage from './PaymentPage';
import SendOrder from '../components/SendOrder';


function Skeleton(){
        return(
            <div>
            <head>
                <title>Complete Responsive Coffee Shop</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                <link rel="stylesheet" href="style.css"></link>

            </head>
            <body>

            {/* <!-- header section starts --> */}
            <NavBar/>
            {/* <!-- header section ends --> */}
        
            {/* <!-- home section starts --> */}
            <Home/>
        
        
            {/* <!-- home section ends --> */}
        
            {/* <!-- about section starts  --> */}
        
            <About/>
            {/* <!-- about section ends --> */}
        
        
            {/* <!-- facility section starts --> */}
        
            <Facility/>
            {/* <!-- facility section ends --> */}
        
            {/* <!-- menu section starts --> */}
        
            <Menu/>

            {/* <!-- menu section ends --> */}
            
            {/* <!-- Gallery section starts --> */}
            <Gallery/>
            {/* <!-- Gallery section ends --> */}
        
        
            {/* <!-- team section starts --> */}
            <Team/>
            {/* <!-- team section ends --> */}
        
            {/* <!-- Contact section starts --> */}
        
            <Contact/>
            <SendOrder/>

            {/* <!-- contact section ends --> */}
        
            {/* <!-- testimonials section starts--> */}
            <Testimonial/>
            {/* <!-- testimonials section ends--> */}
            <PaymentPage/>
        
            {/* <!-- footer section starts --> */}
            <Footer/>
        
            {/* <!-- footer section ends --> */}
        
        
            {/* <!-- custom js file link --> */}
            <script src="C:\Users\Axel\Documents\Freelance\CoffeShop\client\src\script.js"></script>
            </body>
            </div>
            
        )
    }
export default Skeleton;