import React, {useEffect, useState} from 'react';

function Testimonial(){
        return(
            <section className="testimonial" id="testimonials">
                <div className="heading" >
                    <img src="images/menu.png" alt=""></img>
                    <h3>Testimonial</h3>
                </div>
                <div className="testimonial-box-container">
                    <div className="testimonial-box"></div>
                    <div className="box-top">
                        <div className="profile"></div>
                        <div className="profile-img"></div>
                        <div className="reviews"></div>
                    </div>
                </div>
            </section>
        );
    }
export default Testimonial;