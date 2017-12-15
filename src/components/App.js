import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Github from '../images/Github.png';

// import { Home } from './Components/Home';
// import { About } from './Components/About';
// import { Contact } from './Components/Contact';

import '../App.css';

function Footer(){
    return(
        <div>
            {/* Social Media Profiles: Linkedin, Github, Twitter, Instagram,  */}
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1>Hey, I'm Meryl</h1>
                    </header>
                    <img src={Github} alt="github-logo"/>
                    <p className="App-intro">Software Developer & Graphic Designer</p>
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
                <Footer/>
            </div>
        );
    }
}

export default App;
