import React from 'react';
import "../style/Event.scss";

import flowerline from "../assets/flower-line.png";
import leaves from "../assets/leaves.png";

const WeddingEvent = () => {
    return (
        <div>
            <div className="wedding-event-container">
                <div className="wedding-events-header">
                    <h2>The Wedding Event</h2>
                    <img src={flowerline} alt=""/>
                </div>
                <div className="events-container">
                    <div className="event event1">
                        <div className="border"></div>
                        <img src={leaves} alt="" className="leaves"/>
                        <img src={leaves} alt="" className="leaves2"/>
                        <div className="event-content">
                            <h2>Civil Wedding</h2>
                            <hr/>
                            <p>16 April 2025</p>
                            <p>10:00 AM - 12:00 PM</p>
                            <p>Town</p>
                            <a href="">See Location</a>
                        </div>
                    </div>

                    <div className="event event2">
                        <div className="border"></div>
                        <img src={leaves} alt="" className="leaves"/>
                        <img src={leaves} alt="" className="leaves2"/>
                        <div className="event-content">
                            <h2>The Ceremony</h2>
                            <hr/>
                            <p>19 April 2025</p>
                            <p>8:00 AM - 10:00 AM</p>
                            <p>Itawa</p>
                            <a href="">See Location</a>
                        </div>
                    </div>

                    <div className="event event3">
                        <div className="border"></div>
                        <img src={leaves} alt="" className="leaves"/>
                        <img src={leaves} alt="" className="leaves2"/>
                        <div className="event-content">
                            <h2>The Reception</h2>
                            <hr/>
                            <p>19 April 2025</p>
                            <p>15:00 AM - 9:00 PM</p>
                            <p>Lafina Garden <br/> Mitengo</p>
                            <a href="">See Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingEvent;
