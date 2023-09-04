import React, {useEffect, useState} from 'react';

function Team(){

    

    return(
        <section className="team" id="team">
            <div className="heading" >
                <img src="images/menu.png" alt=""></img>
                <h3>Our Team</h3>
            </div>
    
            <div className="box-container">
                <div className="box">
                    <img src="images/espressoSmall.png" alt=""></img>
                    <h3>Espresso</h3>
                    <button className="btn">PICK ME!</button>
                </div>
                
            </div>
    
        </section>
    );
}
export default Team;