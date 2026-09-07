import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>
                Hi, my name's <a href="/about">June</a>.<br></br>Thanks for
                stopping by. I'm a full stack web{" "}
                <a href="/portfolio">developer</a>{" "}
                and dabbler from North Carolina currently based in Brooklyn, NY.
            </h1>
        </div>
    );
}

export default HeroSection;
