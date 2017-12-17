import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

import '../App.css';
import '../animate.css';


function Footer() {
    return(
        <div className="footer">
            <div className="social">
                <a href="https://github.com/merylturner"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/meryl.a.turner"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/madebymeryl/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/merylturner/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://twitter.com/madebymeryl"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="copyright">
            Meryl Turner &copy; 2017
            </div>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className = "wrapper">
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
