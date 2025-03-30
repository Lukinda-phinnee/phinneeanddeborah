import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import "../style/ourstory.scss";
import heart from "../assets/heart-drawing.png"
import bouquet from "../assets/bouquet.png";
import couple from "../assets/main-image.jpg";
import flowers from "../assets/bouquet.png";
import flowerline from "../assets/flower-line.png";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const OurStory = () => {
    return (
        <>
            <div className="story-container">
                <div className="story-header">
                    <h2>Our Love Story</h2>
                    <img src={flowerline} alt="" />
                </div>
                <div className="story">
                    <ErrorBoundary>
                        <VerticalTimeline lineColor={'#126d4e'}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#126d4e', color: '#fff', borderRadius: '200px' }}
                                contentArrowStyle={{ borderRight: '7px solid  #126d4e' }}
                                date={<div className="custom-date-container">
                                    <img src={couple} alt="Date Icon 1" />
                                    <img src={flowers} alt="" className="flowers-icon1" />
                                </div>}
                                iconStyle={{ background: '#fff', color: '#fff' }}
                                icon={<img src={heart} alt="" />}
                                lineColor={'#126d4e'}
                            >
                                <h3 className="vertical-timeline-element-title">How We Met</h3>
                                <h4 className="vertical-timeline-element-subtitle">The start of the journey</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                                <img src={bouquet} alt="" className="bouquet1" />
                                <img src={bouquet} alt="" className="bouquet1-1" />
                                <img src={bouquet} alt="" className="bouquet1-2" />
                                <img src={bouquet} alt="" className="bouquet1-3" />
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#126d4e', color: '#fff', borderRadius: '200px' }}
                                contentArrowStyle={{ borderRight: '7px solid  #126d4e' }}
                                date={<div className="custom-date-container">
                                    <img src={couple} alt="Date Icon 1" />
                                    <img src={flowers} alt="" className="flowers-icon1" />
                                </div>}
                                iconStyle={{ background: '#fff', color: '#fff' }}
                                icon={<img src={heart} alt="" />}
                            >
                                <h3 className="vertical-timeline-element-title">She said yes</h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                                </p>
                                <img src={bouquet} alt="" className="bouquet2" />
                                <img src={bouquet} alt="" className="bouquet2-1" />
                                <img src={bouquet} alt="" className="bouquet2-2" />
                                <img src={bouquet} alt="" className="bouquet2-3" />

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#126d4e', color: '#fff', borderRadius: '200px' }}
                                contentArrowStyle={{ borderRight: '7px solid  #126d4e' }}
                                date={<div className="custom-date-container">
                                    <img src={couple} alt="Date Icon 1" />
                                    <img src={flowers} alt="" className="flowers-icon1" />
                                </div>}
                                iconStyle={{ background: '#fff', color: '#fff' }}
                                icon={<img src={heart} alt="" />}
                            >
                                <h3 className="vertical-timeline-element-title">The Dowry Ceremony</h3>
                                <h4 className="vertical-timeline-element-subtitle">19 October 2024</h4>
                                <p>
                                    Our families came together in a beautiful celebration of tradition and love...
                                </p>
                                <img src={bouquet} alt="" className="bouquet1" />
                                <img src={bouquet} alt="" className="bouquet1-1" />
                                <img src={bouquet} alt="" className="bouquet1-2" />
                                <img src={bouquet} alt="" className="bouquet1-3" />
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#126d4e', color: '#fff', borderRadius: '200px' }}
                                contentArrowStyle={{ borderRight: '7px solid  #126d4e' }}
                                date={<div className="custom-date-container">
                                    <img src={couple} alt="Date Icon 1" />
                                    <img src={flowers} alt="" className="flowers-icon1" />
                                </div>}
                                iconStyle={{ background: '#fff', color: '#fff' }}
                                icon={<img src={heart} alt="" />}
                            >
                                <h3 className="vertical-timeline-element-title">The Presentation</h3>
                                <h4 className="vertical-timeline-element-subtitle">20 October 2024</h4>
                                <p>
                                    The presentation was a joyous occasion where we officially introduced each other to the church and our extended families and friends...
                                </p>
                                <img src={bouquet} alt="" className="bouquet2" />
                                <img src={bouquet} alt="" className="bouquet2-1" />
                                <img src={bouquet} alt="" className="bouquet2-2" />
                                <img src={bouquet} alt="" className="bouquet2-3" />
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </ErrorBoundary>
                </div>
            </div>
        </>
    );
};

export default OurStory;
