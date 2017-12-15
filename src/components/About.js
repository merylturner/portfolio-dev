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
            I'm About all the stuff.
            Checkout my Graphic Design <a href="https://www.madebymeryl.com">Portfolio</a>

            <header>
                <h2>Skills</h2>
            </header>
            <hr/>
            <div className="skills">
                {/* display name when hover over */}
                <div style={{margin: '20px auto'}}>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-react-original"></i>
                    <i class="devicon-angularjs-plain"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-nodejs-plain-wordmark"></i>
                    <i class="devicon-html5-plain"></i>
                </div>
                {/* <i class="devicon-docker-plain"></i> */}
                {/* <i class="devicon-express-original-wordmark"></i> */}
                {/* <i class="devicon-github-plain"></i> */}
                {/* <i class="devicon-heroku-original"></i> */}
                {/* <i class="devicon-protractor-plain-wordmark"></i> */}
                <div style={{margin: '20px auto'}}>
                    <i class="devicon-less-plain-wordmark"></i>
                    <i class="devicon-git-plain"></i>
                    <i class="devicon-python-plain"></i>
                    <i class="devicon-mocha-plain"></i>
                    <i class="devicon-mongodb-plain"></i>
                    <i class="devicon-amazonwebservices-original"></i>
                </div>
                {/* <i class="devicon-illustrator-line"></i>
                <i class="devicon-photoshop-line"></i> */}
            </div>
        </div>
    );
}