import React from 'react'
import flowerline from "../assets/flower-line.png";
import "../style/Footer.scss";

function Footer() {
    return (
        <div>
            <div className="gallery-header">
                <h2>The Begining</h2>
                <img src={flowerline} alt="Flower Line" />
            </div>

            <div className="footer-container">
                <div className="scriptures">
                    <div className="card1 card">
                        <h3>Genesis 2:24</h3>
                        <p>
                            <span> Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.</span>
                        </p>
                    </div>
                    <div className="card2 card">
                        <h3>Ecclesiates 4:9</h3>
                        <p>
                            <span>Two are better than one; because they have a good reward for their labour.</span>
                        </p>
                    </div>
                    <div className="card3 card">
                        <h3>Proverbs 5:18</h3>
                        <p>Let thy fountain be blessed: and rejoice with the wife of thy youth.</p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="text">
                    <h1>adventure begins</h1>
                    <h2>April 19, 2025, Lafina Garden, Mitengo, Ndola, ZAMBIA</h2>
                </div>
            </footer>
        </div>
    )
}

export default Footer
