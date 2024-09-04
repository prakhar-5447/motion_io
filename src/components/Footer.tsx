import React from 'react';
import './Footer.sass';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import brush from "/assets/brush.svg";

const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>
                    <img src={brush} alt="brush" />
                    <span>
                        <b><i>pixel8cloud</i></b>
                    </span>
                </h2>
                <a>View Projects</a>
            </div>
            <div className="container">
                <div className="footer-col">
                    <h3>About Us</h3>
                    <p>We are a creative agency specializing in design and development. Let's learn the concept of animation and artworks in presenting any product / platform or service.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Visit Website</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Moion Designing</a></li>
                        <li><a href="#">Vector Art</a></li>
                        <li><a href="#">Graphics</a></li>
                        <li><a href="#">Template</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="subscribe">
                    <h3>Subscribe to Our Newsletter</h3>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 <i><b>pixel8cloud</b></i>. All Rights Reserved.</p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;
