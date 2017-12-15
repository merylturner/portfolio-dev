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
            I'm About all the stuff.
            Checkout my Graphic Design <a href="https://www.madebymeryl.com">Portfolio</a>
        </div>
    );
}