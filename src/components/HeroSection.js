import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>
                Hi, my name is <a href="/about">June</a>.<br></br>Thank you for
                stopping by. I'm a full stack web{" "}
                <a href="/portfolio">developer</a>,{" "}
                <a href="https://soundcloud.com/house-of-pentacles-productions/sets/intended-to-cure-letters-for-better-days">
                    musician
                </a>
                , and dabbler from Durham, NC currently based in Brooklyn, NY.
            </h1>
        </div>
    );
}

export default HeroSection;
