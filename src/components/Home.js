import React from 'react';
import Header from "./Header";
import "./Home.css";

function Home() {
    return (
        <div>
            <div>
            <Header/>
            </div>
            <div className="sub">
                <h1 align="center" style={{color:'blue'}}>Subscription Billing & Revenue Operations <br/> <span style={{color:"black"}}>for Fast-growth B2B SaaS</span></h1>
                <p align="center">Get the operational sophistication to achive,sustain,<br/> and scale recurring revenue</p>
            </div>
            <div className="button">
                <button id="btn1">Schedule a Demo </button>
                <button id="btn2">Sign up for free</button>
            </div>
        </div>
    )
}

export default Home

