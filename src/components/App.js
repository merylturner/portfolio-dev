import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import github from '../images/git.png';
import styled from 'styled-components';
// import { Home } from './Components/Home';
// import { About } from './Components/About';
// import { Contact } from './Components/Contact';

import '../App.css';

const Social = styled.div`
    width: 10px;
    text-align: center;
`;

function Footer(){
    return(
        <div>
            {/* Social Media Profiles: Linkedin, Github, Twitter, Instagram,  */}
            <img src={github} alt="github-logo"/>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <header className="App-header">
                        <h1>Hey, I'm Meryl</h1>
                    </header>
                    <p className="App-intro">I'm a Software Developer & Graphic Designer born and raised in Portland, Oregon.</p>
                </div>
                <div>
                    <Router>
                        <div>
                            {/* <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} /> */}
                        </div>
                    </Router>
                </div>
                <Social><Footer/></Social>
            </div>
        );
    }
}

export default App;
