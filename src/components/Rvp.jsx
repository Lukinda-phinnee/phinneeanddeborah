import React from 'react'
import flowerline from "../assets/flower-line.png";
import flowers from "../assets/flower-line.png";
import deco from "../assets/bouquet.png";
import couple from "../assets/couple.png";
import couple2 from "../assets/2.png";
import "../style/Rvp.scss";

function Rvp() {
    return (
        <div>
            <div className="gallery-header">
                <h2>RVP</h2>
                <img src={flowerline} alt="Flower Line" />
            </div>
            <div className="rpv-container">


                <div className="contents">
                    {/*<img src={deco} alt="" className="bouquet bouquet1" />
                    <img src={deco} alt="" className="bouquet bouquet2" />
                    <img src={deco} alt="" className="bouquet bouquet3" />
                    <img src={deco} alt="" className="bouquet bouquet4" />
                    <img src={deco} alt="" className="bouquet bouquet5" />*/}
                    <img src={couple} alt="" className="couple" />
                    <img src={couple2} alt="" className="couple2" />

                    <div className="inner-cercle">

                    </div>
                    <div className="flowers">
                        <img src={flowers} alt="" />
                        <h2>will you attend?</h2>
                    </div>
                    <div className="lignes">
                        <hr />
                        <div className="circle"></div>
                        <hr />
                    </div>
                    <form action="">
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="email" name="email" id="" placeholder='Email' />
                        <input type="text" name="town" id="" placeholder='Town' />
                        <select name="services" id="">
                            <option value="">Select service to attend</option>
                            <option value="civil">Civil Wedding</option>
                            <option value="religion">The Ceremony</option>
                            <option value="reception">The Reception</option>
                            <option value="allOfTheAbove">All Of The Above</option>
                        </select>
                        <select name="number" id="">
                            <option value="">Number Of Guests</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                        </select>
                        <button type="submit">Submit</button>
                        <div className="flowers2">
                            <img src={flowers} alt="" />
                        </div>


                    </form>
                </div>

            </div>
        </div>
    )
}

export default Rvp
