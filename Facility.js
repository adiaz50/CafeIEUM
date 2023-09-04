import React, {useEffect, useState} from 'react';

function Facility(){
        return(
            <section className="facility">
                <div className="heading" >
                    <img src="images/menu.png" alt=""></img>
                    <h3>our facility</h3>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>varieties of coffees</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, incidunt.</p>
                    </div>
                    <div className="box">
                        <img src="images/coffeebeanssmall.png" alt=""></img>
                        <h3>coffee beans</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, incidunt.</p>
                    </div>
                    <div className="box">
                        <img src="images/breakfastsmall.png" alt=""></img>
                        <h3>breakfasts</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, incidunt.</p>
                    </div>
                    <div className="box">
                        <img src="images/togoSmall.png" alt=""></img>
                        <h3>to go</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, incidunt.</p>
                    </div>
                </div>
            </section>
        );
    }
export default Facility;