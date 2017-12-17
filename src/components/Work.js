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
                <h3>GoldStar</h3>
                <div className="project-skills"><a>React</a> <a>Redux</a> <a>NodeJS</a> <a>MongoDB</a></div>
                <p>Full Stack JavaScript flashcard application for teachers and students. Teachers can create flashcard sets for all of their classes for students to study.</p>
                <a href="http://gold-star.herokuapp.com/">Website </a>
                <a href="https://github.com/GoldStarPDX">Repository</a>
            </div>
            <div className="project animated fadeInRight">
                <h3>Jubilant Disco</h3>
                <div className="project-skills"><a>MongoDB</a> <a>NodeJS</a> <a>Express</a> <a>Mongoose</a><a>Aggregation</a></div>
                <p>Jubilant Disco matches users together with a compatibility algorithm using their top 10 favorite albums. It accounts for genre, artist, and album matches, as well as where the albums are ranked in their list. </p>
                {/* <a href="http://gold-star.herokuapp.com/">Website </a> */}
                <a href="https://github.com/merylturner/jubilant-disco">Repository</a>
            </div>
            <div className="project animated fadeInLeft">
                <h3>Peer Politics</h3>
                <div className="project-skills"> <a>NodeJS</a><a>SQL</a><a>Express</a><a>ChartJS</a></div>
                <p>Full Stack JavaScript flashcard application for teachers and students. Teachers can create flashcard sets for all of their classes for students to study.</p>
                <a href="http://peer-politics.herokuapp.com/">Website </a>
                <a href="https://github.com/merylturner/Peer-Politics">Repository</a>
            </div>
            <div className="project animated fadeInRight">
                <h3>Logic Party</h3>
                <div className="project-skills"><a>React</a></div>
                <p>Using React, we developed a logic puzzle game based on the app Oh Hi. </p>
                <a href="http://logic-party.herokuapp.com/">Website </a>
                <a href="https://github.com/merylturner/logic-puzzle">Repository</a>
            </div>
        </div>
    );
}