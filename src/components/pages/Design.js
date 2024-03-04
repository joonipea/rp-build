import React from "react";
import { DynamicBackground } from "../DynamicBackground";
import "./Design.css";

function Design() {
    return (
        <>
            <DynamicBackground />
            <div id="design" className="design-container">
                <meta name="robots" content="noindex"></meta>
                <h2>Websites</h2>
                <div className="design-card">
                    <div className="design-text">
                        <p className="caption">June 2020-Present</p>
                        <h4>
                            <a href="https://amalijewelry.com">Amáli Jewelry</a>
                        </h4>
                        <p className="caption">Software Engineer</p>
                        <p>
                            A luxury handcrafted jewelry company with a focus on
                            handwoven chains and signature techniques.
                        </p>
                        <p>
                            As the sole developer I've designed, built and
                            tested multiple iterations of the website. I've
                            worked closely with the owners to ensure that their
                            story is told on every page. Amáli is a Shopify site
                            and is currently built on liquid, HTML, CSS, and
                            Javascript as well as custom built apps made with
                            React, Polaris, Express, Node, and PostgresQL. A new
                            site is currently being built with Shopify's new
                            framework Hydrogen.
                        </p>
                    </div>
                </div>
                <div className="design-card">
                    <div className="design-text">
                        <p className="caption">February 2020-August 2020</p>
                        <h4>
                            <a href="https://houseofpentacles.org">
                                Comfrey Films (fka House of Pentacles)
                            </a>
                        </h4>
                        <p className="caption">
                            Web developer & Graphic Designer
                        </p>
                        <p>
                            Comfrey Films is a Film Training Program and
                            Production House designed to launch Black trans
                            youth (ages 18-35) into the film industry and tell
                            stories woven at the intersection of being Black and
                            Trans.
                        </p>
                        <p>
                            Comfrey Films's front facing site was built on
                            wordpress using HTML, Vanilla JavaScript, and SCSS.
                            Private member only functions are built using React
                            and Node.js.
                        </p>
                    </div>
                </div>
                <div className="design-card">
                    <div className="design-text">
                        <p className="caption">May 2019-April 2020</p>
                        <h4>
                            <a href="https://www.ushaoils.com">Usha Oils</a>
                        </h4>
                        <p className="caption">Consultant</p>
                        <p>
                            <a href="https://ushaoils.com">Usha Oils</a> Usha
                            Oils was an essential oils company based out of
                            Nepal and Durham, North Carolina.
                        </p>
                        <p>
                            Usha Oils was a Shopify site and was built on
                            liquid, HTML, CSS, and Javascript as well as custom
                            built apps made with React, Polaris, Express, and
                            Node.
                        </p>
                    </div>
                </div>
                <h2>Web Apps</h2>
                <div className="design-card">
                    <a
                        className="design-title-card"
                        href="https://dunamen.onrender.com">
                        <h4>Prattle</h4>
                        <img src="./images/dunamen.gif" alt="prattle" />
                    </a>
                    <p className="design-information">
                        A daily word game based off of Bananagrams. Race against
                        the clock and your friends to empty your hand of 21
                        letters. Built with React & Bun.
                    </p>
                </div>
                <div className="design-card">
                    <a
                        className="design-title-card"
                        href="https://bytecrawler.onrender.com">
                        <h4>Bytecrawler</h4>
                        <img src="./images/bytecrawler.gif" alt="bytecrawler" />
                    </a>
                    <p className="design-information">
                        A rougue-like dungeon crawler with procedural dungeons
                        built with React, NodeJS, and SurrealDB.
                    </p>
                </div>
                <div className="design-card">
                    <a
                        className="design-title-card"
                        href="https://rciad.onrender.com">
                        <h4>Real Cooperative in the African Diaspora</h4>
                        <img src="./images/rciad.gif" alt="rciad" />
                    </a>
                    <p>
                        A tool for people in the African diaspora to share parts
                        of our culture (recipes, spirituality, language, and
                        more) with each other. I started by creating a recipe
                        sharing site using vanilla Node.js, Surreal DB, Jest,
                        and React. Currently working on adding more features and
                        making the site more accessible.
                    </p>
                </div>
                <div className="design-card">
                    <a className="design-title-card" href="/journal">
                        <h4>Journal</h4>
                        <img src="./images/journal.gif" alt="journal gif" />
                    </a>
                    <p className="design-information">
                        A journaling app built with React. Entries are stored
                        locally in your browser using{" "}
                        <a href="https://www.npmjs.com/package/store-js">
                            store-js
                        </a>
                        . Alternatively, you can log in through the settings
                        page to enable cloud saving. Please note entries are not
                        encrypted. Accounts are made and accessed through
                        Passport.js, Mongodb, and Express.js The heavylifting
                        for this page can be found{" "}
                        <a href="https://github.com/joonipea/react-portfolio">
                            here
                        </a>
                        .
                    </p>
                </div>
                <div className="design-card">
                    <a className="design-title-card" href="/mathle">
                        <h4>Mathle</h4>
                        <img src="./images/mathle.gif" alt="mathle gif" />
                    </a>
                    <p>
                        Another Wordle clone, but with math. Built with React.
                        You can find the{" "}
                        <a href="https://github.com/joonipea/react-portfolio/blob/master/client/src/components/pages/mratth.js">
                            source code here.
                        </a>
                    </p>
                </div>
                <div className="design-card">
                    <a href="/names">
                        <h4>Random Name Generator</h4>
                    </a>
                    <p>
                        A random name generator built with React. There's a
                        super small chance to generate the name Lightning
                        McQueen.
                    </p>
                </div>
                <div className="design-card">
                    <a href="https://itunes-spotify.herokuapp.com/">
                        <h4>iTunes Spotify Playlist Converter</h4>
                    </a>
                    <p>
                        A TypeScript project to convert iTunes playlists into
                        spotify playlists using the NodeJS Spotify Web API
                        wrapper built on top of{" "}
                        <a href="https://github.com/Poc275/iTunes-to-Spotify">
                            Poc275's converter/XML parser
                        </a>
                        . You can find the{" "}
                        <a href="https://github.com/joonipea/itunes-to-spotify-playlist">
                            source code here.
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Design;
