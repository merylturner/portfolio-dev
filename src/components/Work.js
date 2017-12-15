import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div>
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
            I'm Work.
        </div>
    );
}