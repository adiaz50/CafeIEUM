import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function About(){
        return(
            <section className="about" id="about">
                <div className="image">
                    <img src="images/cartoonwoman.png" alt=""></img>
                </div>
                <div className="content">
                    <h3>A cup of coffee can Complete your day</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos laudantium nam aut, nobis quibusdam sequi fuga id dolor ipsam!</p>
                    <Link to="/menu" className="btn">Our menu</Link>
                </div>
            </section>
        );
    }
export default About;