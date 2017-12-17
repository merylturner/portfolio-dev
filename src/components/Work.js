import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    );    
}

export default function Work() {
    return (
        <div>
            <Navigation/>
            <header>
                <h2>My Work</h2>
            </header>
            <hr/>
            <div className="project animated fadeInLeft">
                <h1>Project Title</h1>
                <h5>JAVASCRIPT HTML CSS BLAH BLAH</h5>
                <p>description description description description description</p>
            </div>
        </div>
    );
}