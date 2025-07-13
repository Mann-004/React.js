import React from "react";
import "./Card.css"
import img1 from "../../assets/img1.avif"
import img2 from "../../assets/img2.avif"
import img3 from "../../assets/img3.avif"

const Card = () => {
    return (
        <>
            <div className="cardConatiner">
                <div className="container">
                    <div className="card">
                        <img data-scroll data-scroll-spped="1" src={img1} alt="" />
                        <div data-scroll data-scroll-speed="-3" className="desc">

                        </div>
                    </div>
                    <div className="card">
                        <img data-scroll data-scroll-speed="3" src={img2} alt="" />
                        <div data-scroll data-scroll-speed="-2" className="desc">
                            
                        </div>

                    </div>
                    <div className="card">
                        <img data-scroll data-scroll-speed="5"  src={img3} alt="" />
                        <div data-scroll data-scroll-speed="1" className="desc">
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card;