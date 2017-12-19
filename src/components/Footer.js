import React from 'react';


export default function Footer() {
    return(
        <div className="footer">
            <div className="social">
                <a href="https://github.com/merylturner"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/meryl.a.turner"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/madebymeryl/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/merylturner/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://twitter.com/madebymeryl"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="copyright">
            Meryl Turner &copy; 2017
            </div>
            <br/>
        </div>
    );
}