import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/work"> Work </Link>
        </div>
    );    
}

export default function Contact() {
    return (
        <div>
            <Navigation/>
            Contact Me.
        </div>
    );
}