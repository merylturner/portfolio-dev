import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import github from '../images/github2.png';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

import '../App.css';

function Footer() {
    return(
        <div className="social">
            {/* Social Media Profiles: Linkedin, Github, Twitter, Instagram,  */}
            <a href="https://github.com/merylturner"><img src={github} alt="github-logo"/></a>
            <a href="https://www.facebook.com/meryl.a.turner"><img src={fb} alt="fb-logo"/></a>
            <a href="https://www.instagram.com/madebymeryl/"><img src={insta} alt="insta-logo"/></a>
            <a href="https://www.linkedin.com/in/merylturner/"><img src={linkedin} alt="linkedin-logo"/></a>
            <a href="https://twitter.com/madebymeryl"><img src={twitter} alt="twitter-logo"/></a>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <div>
                    <header className="App-header">
                        <h1>Hey, I'm Meryl</h1>
                    </header>
                    <p className="App-intro">I'm a Software Developer & Graphic Designer born and raised in Portland, Oregon.</p>
                </div> */}
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/work" component={Work} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </Router>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
