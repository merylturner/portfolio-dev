import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/work"> Work </Link>
        </div>
    );    
}

export default function About() {
    return (
        <div>
            <Navigation/>
            <header>
                <h2>About me </h2>
            </header>
            <hr/>
            <p>Born and raised in Portland, Oregon, I found a love for the PNW and it has continued to inspire my work.</p>
            <p>Checkout my Graphic Design <a href="https://www.madebymeryl.com">Portfolio</a></p>
            <header>
                <h2>Skills</h2>
            </header>
            <hr/>
            <div className="skills">
                <div style={{margin: '20px auto'}} className="animated fadeInRight">
                    <span title="JavaScript"><i class="devicon-javascript-plain"></i></span>
                    <span title="React"><i class="devicon-react-original"></i></span>
                    <span title="AngularJS"><i class="devicon-angularjs-plain"></i></span>
                    <span title="NodeJS"><i class="devicon-nodejs-plain-wordmark"></i></span>
                    <span title="Git"><i class="devicon-git-plain"></i></span>
                    <span title="CSS"><i class="devicon-css3-plain"></i></span>
                </div>
                {/* <i class="devicon-heroku-original"></i> */}
                {/* <i class="devicon-protractor-plain-wordmark"></i> */}
                <div style={{margin: '20px auto'}} className="animated fadeInLeft">
                    <span title="HTML"><i class="devicon-html5-plain"></i></span>
                    <span title="LESS"><i class="devicon-less-plain-wordmark"></i></span>
                    <span title="AWS"><i class="devicon-amazonwebservices-original"></i></span>
                    <span title="Python"><i class="devicon-python-plain"></i></span>
                    <span title="Mocha"><i class="devicon-mocha-plain"></i></span>
                    <span title="MongoDB"><i class="devicon-mongodb-plain"></i></span>
                </div>
                {/* Designer Icons
                <div>
                <i class="devicon-illustrator-line"></i>
                <i class="devicon-photoshop-line"></i>
            </div> */}
            </div>
            <header>
                <h2>My Expertise</h2>
            </header>
            <div>
                <h2>Code</h2>
                <p>blahblahblahblahblahblahlb</p>
            </div>
            <div>
                <h2>Design</h2>
                <p>blahblahblahblahblahblahlb</p>
            </div>
            <div>
                <h2>Ideas</h2>
                <p>blahblahblahblahblahblahlb</p>
            </div>
        </div>
    );
}