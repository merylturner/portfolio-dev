import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/" className="active"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/work"> Work </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    );    
}

export default function Home() {
    // let history = history.getCurrentLocation().pathname GET HISTORY FOR CURRENT LOCATION >> UPDATE NAV BARS TO ALL ROUTES, ONLY HIGHLIGHT CURRENT
    return (
        <div>
            <Navigation/>
            <header className="App-header animated bounceInRight">
                <h1>Hey, I'm Meryl.</h1>
            </header>
            <p className="App-intro">I'm a Software Developer, Graphic Designer and Avid Beer Geek born and raised in Portland, Oregon.</p>
        </div>
    );
}