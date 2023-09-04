import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Home(){
        return(
            <>
            <div className="home-bg bg-gradient-to-r from-white via-transparent to-transparent bg-cover bg-center">
                <section className="home min-h-screen flex items-center" id="home">
                    <div className="content mx-4 md:mx-auto text-start md:text-center">
                        {/* Use "text-left" for small screens and "text-center" for medium and above */}
                        <h3 className="text-6xl font-black text-black font-cursive">Café IEUM</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, doloribus ab nulla veritatis expedita nihil.</p>
                        <Link to="/about" className="btn">about us</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
        );
    }

export default Home;