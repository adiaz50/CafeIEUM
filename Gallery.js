import React, {useEffect, useState} from 'react';

function Gallery(){
        return(
            <section className="gallery" id="gallery">
                <div className="heading" >
                    <img src="images/menu.png" alt=""></img>
                    <h3>gallery</h3>
                </div>
        
                <div className="box-container">
                    <img src="images/PXL_20230416_052112291.jpg" alt=""></img>
                    <img src="images/train.jpg" alt=""></img>
                    <img src="images/mountains.jpg" alt=""></img>
                    <img src="images/girlcoffee.jpg" alt=""></img>
                    <img src="images/breakfastsmall.png" alt=""></img>
                    <img src="images/mountains.jpg" alt=""></img>
                </div>
            </section>
        );
    }
export default Gallery;