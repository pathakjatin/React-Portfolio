import React from 'react';
import './footer.css';
import { FaInstagram , FaGithub , FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Jatin Pathak</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                        href="https://www.instagram.com/pathakjatin_/" 
                        target='_blank' className="footer__social-link">
                            <FaInstagram />
                    </a>
                    <a 
                        href="https://github.com/pathakjatin" 
                        target='_blank' 
                        className="footer__social-link">
                            <FaGithub />
                    </a>
                    <a 
                        href="https://x.com/_jatin_pathak_" 
                        target='_blank' 
                        className="footer__social-link">
                            <FaTwitter />
                    </a>
                </div>

                <span className="footer__copy">&#169; Jatin Pathak. All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;