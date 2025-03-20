import React from 'react';
import "../style/Gallery.scss";
import flowerline from "../assets/flower-line.png";
import leaves from "../assets/leaves.png";
import image1 from "../assets/presentation.jpg";
import image2 from "../assets/image1.jpg";
import image3 from "../assets/image2.jpg";
import image4 from "../assets/image3.jpg";
import image5 from "../assets/image4.jpg";
import image6 from "../assets/image5.jpg";
import image7 from "../assets/image6.jpg";
import image8 from "../assets/image7.jpg";

const Photos = () => {
    return (
        <div>
            <div className="gallery-header">
                <h2>Gallery</h2>
                <img src={flowerline} alt="Flower Line" />
            </div>
            <div className="gallery">
                <div className="contents contents1">
                    <div className="gallery-item item1">

                        <img src={image1} alt="Gallery 1" />

                    </div>
                    <div className="gallery-item item2">
                        <img src={image2} alt="Gallery 2" />
                    </div>
                </div>
                <div className="contents contents2">
                    <div className="gallery-item item1">
                        <img src={image3} alt="Gallery 1" />
                    </div>
                    <div className="gallery-item item2">
                        <img src={image6} alt="Gallery 2" />
                    </div>
                </div>
                <div className="contents contents3">
                    <div className="gallery-item item1">
                        <img src={image7} alt="Gallery 1" />
                    </div>
                    <div className="gallery-item item2">
                        <img src={image4} alt="Gallery 2" />
                    </div>
                </div>
                <div className="contents contents4">
                    <div className="gallery-item item1">
                        <img src={image5} alt="Gallery 1" />
                    </div>
                    <div className="gallery-item item2">
                        <img src={image8} alt="Gallery 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
