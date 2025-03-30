import React from 'react';
import '../style/home.scss';

import SingleFlower from "../assets/green-single=flower.svg"

const Home = () => {
    return (
        <div className="home">
            <div className="section">
                <div className="inner-section">
                    <h2>Phinnee<br /> Lukinda</h2>
                    <p>“This is now bone of my bones And flesh of my flesh; She shall be called Woman, Because she was taken out of Man.”</p>
                    <img src={SingleFlower} className="singleflower1" alt="" />
                    <img src={SingleFlower} className="singleflower2" alt="" />
                    <img src={SingleFlower} className="singleflower3" alt="" />
                    <img src={SingleFlower} className="singleflower4" alt="" />
                    <img src={SingleFlower} className="singleflower5" alt="" />
                    <img src={SingleFlower} className="singleflower6" alt="" />
                </div>
            </div>
            <div className="main-img">
                <div className="wedding-date">
                    <h3>We Are Getting Married On</h3>
                    <p>19 . 04 . 2025</p>
                </div>
                <div className="front-circle">
                </div>
            </div>
            <div className="section top">
                <div className="inner-section">
                    <h2>Deborah<br /> Chungu</h2>
                    <p>'Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh.'</p>

                    <img src={SingleFlower} className="singleflower1" alt="" />
                    <img src={SingleFlower} className="singleflower2" alt="" />
                    <img src={SingleFlower} className="singleflower3" alt="" />
                    <img src={SingleFlower} className="singleflower4" alt="" />
                    <img src={SingleFlower} className="singleflower5" alt="" />
                    <img src={SingleFlower} className="singleflower6" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;