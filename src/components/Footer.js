import React from 'react';
import "../assests/style.css";
import Contact from './Contact';

function Footer() {
    return (
        <>
            <footer className="text-center pos-re">
                <div className="container">
                    <a className="logo" href="#">
                        <img src={"https://nobo.life/img/nobo/logo/logo-nobo-black-bold-cropped-padded-small.png"}  alt="logo" width={80}/>
                    </a>

                    <div className="social">
                        <a href="" target="_blank">
                            <i className="fab fa-facebook-f">
                            </i>
                        </a>
                        <a href="" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a>

                    </div>

                    <p>&copy; Yassine</p>
                </div>


            </footer>
            <Contact/>
        </>
);
}

export default Footer;
