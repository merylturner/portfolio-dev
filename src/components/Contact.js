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
            <header>
                <h2>Get In Touch</h2>
            </header>
            <hr/>
            Send me an <a href="mailto:merylturner08@gmail.com?subject=CONTACT FORM SUBMISSION: merylturner.com">Email</a>.
        </div>
    );
}