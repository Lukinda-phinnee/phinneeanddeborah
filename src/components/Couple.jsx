import React from 'react';
import "../style/Couple.scss";

import flowerline from "../assets/flower-line.png";

const Couple = () => {
    return (

        <div className="couple-container">
            <div className="couple-header">
                <h2>Happy Couple</h2>
                <img src={flowerline} alt="" />
            </div>
            <div className="section-container">
                <div className="box">
                    <div className="inner-box">
                        <h3>Ecclesiastes 4:9</h3>
                        <p>
                            Two are better than one; because they have a good reward for their labour.
                        </p>
                    </div>
                </div>
                <div className="box-img">
                    <div className="inner-box-img">
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                        <h3>Proverbs 18:22</h3>
                        <p>
                            He who finds a wife finds a good thing,  And obtains favor from the Lord.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Couple;
