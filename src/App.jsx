// src/App.jsx
import React from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import CountdownTimer from "./components/CountdownTimer.jsx";
import Couple from "./components/Couple.jsx";
import OurStory from "./components/OurStory.jsx";
import WeddingEvent from "./components/Event.jsx";
import Photos from "./components/gallery.jsx";
import Rvp from "./components/Rvp.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css"

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <CountdownTimer />
                <Couple />
                <OurStory />
                <WeddingEvent />
                <Photos />
                <Rvp />
                <Footer />
            </main>

        </div>
    );
}

export default App;