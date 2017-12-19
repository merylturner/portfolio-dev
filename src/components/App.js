import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

import '../App.css';
import '../animate.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
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
