import React, {useEffect, useState} from 'react';
import '../style.css'

function Menu(){
        return(
            <section className="menu" id="menu">
                <div className="heading" >
                    <img src="images/menu.png" alt=""></img>
                    <h3>Menu</h3>
                </div>
        
        
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>Espresso</h3>
                    </div>
        
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>capuccino</h3>
                    </div>
                </div>
        
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>black coffee</h3>
                    </div>
                </div>
        
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>Frapuccino</h3>
                    </div>
                </div>
                
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>Frapuccino</h3>
                    </div>
                </div>
        
                <div className="box-container">
                    <div className="box">
                        <img src="images/espressoSmall.png" alt=""></img>
                        <h3>Frapuccino</h3>
                    </div>
                </div>
        
        
        
                </div>
            </section>
        );
    }
export default Menu;