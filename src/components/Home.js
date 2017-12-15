import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/work"> Work </Link>
        </div>
    );    
}

export default function Home() {
    return (
        <div>
            <div>
                <Navigation/>
                <header className="App-header">
                    <h1>Hey, I'm Meryl.</h1>
                </header>
                <p className="App-intro">I'm a Software Developer & Graphic Designer born and raised in Portland, Oregon.</p>
            </div>
        </div>
    );
}