import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/about" className="active"> About </Link>
            <Link to="/work"> Work </Link>
            <Link to="/contact"> Contact </Link>
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
            <p>Born and raised in Portland, Oregon, I found a love for the PNW<br/> and it has continued to inspire my work.</p>
            {/* <br/> */}
            <br/><p>When I'm not building websites, you can find me running, hiking, <br/>exploring the coffee shops and local breweries of Portland. </p>

            <p><a style={{color: 'black'}}href="https://www.madebymeryl.com">Checkout my Graphic Design Portfolio<i class="fa fa-pencil" aria-hidden="true" style={{marginLeft: 10}}></i></a></p>
            <header>
                <h2>Skills</h2>
            </header>
            <hr/>
            <div className="skills">
                <div style={{margin: '20px auto'}} className="animated fadeInRight">
                    <span title="JavaScript"><i className="devicon-javascript-plain"></i></span>
                    <span title="React"><i className="devicon-react-original"></i></span>
                    <span title="AngularJS"><i className="devicon-angularjs-plain"></i></span>
                    <span title="NodeJS"><i className="devicon-nodejs-plain-wordmark"></i></span>
                    <span title="Git"><i className="devicon-git-plain"></i></span>
                    <span title="CSS"><i className="devicon-css3-plain"></i></span>
                </div>
                {/* <i class="devicon-heroku-original"></i> */}
                {/* <i class="devicon-protractor-plain-wordmark"></i> */}
                <div style={{margin: '20px auto'}} className="animated fadeInLeft">
                    <span title="HTML"><i className="devicon-html5-plain"></i></span>
                    <span title="LESS"><i className="devicon-less-plain-wordmark"></i></span>
                    <span title="AWS"><i className="devicon-amazonwebservices-original"></i></span>
                    <span title="Python"><i className="devicon-python-plain"></i></span>
                    <span title="Mocha"><i className="devicon-mocha-plain"></i></span>
                    <span title="MongoDB"><i className="devicon-mongodb-plain"></i></span>
                </div>
                {/* Designer Icons
                <div>
                <i class="devicon-illustrator-line"></i>
                <i class="devicon-photoshop-line"></i>
            </div> */}
            </div>
            {/* <header>
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
            </div> */}
            {/* <header>
                <h2>Resume</h2>
            </header>
            <hr/>
            <div className="skills">
                <a style={{color: 'black'}}href="ResumeMeryl.pdf" download="">Download</a>
            </div> */}
        </div>
    );
}