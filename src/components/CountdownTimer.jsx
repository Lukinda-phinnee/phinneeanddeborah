// src/CountdownTimer.jsx
import React, { useEffect, useState } from "react";
import "../style/countdown.scss";

import leaves from "../assets/leaves.png";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Set the wedding date to April 19, 2025, at 6:00 PM (18:00)
    const weddingDate = new Date("2025-04-19T15:00:00").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance > 0) {
                // Calculate months (approximation: 1 month = 30.44 days)
                const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
                const months = Math.floor(totalDays / 30.44);
                const remainingDays = totalDays % 30.44;

                // Calculate other units
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ months, days: remainingDays, hours, minutes, seconds });
            } else {
                setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-container">

            <div className="thebigday">
                <p>We are waiting for...</p>
                <h3>The Big Day</h3>
            </div>
            <div className="countdown">
                <div className="count-container months">
                    <img src={leaves} alt="" className="leaves1"/>
                    <div>
                        <span>{timeLeft.months}</span>
                        <small>Months</small>
                    </div>
                </div>
                <div className="count-container days">
                    <img src={leaves} alt="" className="leaves2"/>
                    <div>
                        <span>{Math.floor(timeLeft.days)}</span>
                        <small>Days</small>
                    </div>
                </div>
                <div className="count-container hours">
                    <img src={leaves} alt="" className="leaves3"/>
                    <div>
                        <span>{timeLeft.hours}</span>
                        <small>Hours</small>
                    </div>
                </div>
                <div className="count-container minutes">
                    <img src={leaves} alt="" className="leaves4"/>
                    <div>
                        <span>{timeLeft.minutes}</span>
                        <small>Minutes</small>
                    </div>
                </div>
                <div className="count-container seconds">
                    <img src={leaves} alt="" className="leaves5"/>
                    <div>
                        <span>{timeLeft.seconds}</span>
                        <small>Seconds</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;