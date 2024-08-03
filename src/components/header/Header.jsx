import React, { useState } from 'react'
import './header.css';
import jplogo from '../../logo.svg';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaImage, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {

    window.addEventListener("scroll" , function(){
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    // Toggle menu
    const [toggle , setToggle] = useState(false);
    function handleToggle(){
        setToggle((click) => !click);
    }

    const [activeNav , setActiveNav] = useState("#home");

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img src={jplogo} alt="JP logo" />
            </a>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item " id="flex-col">
                        <a 
                        href="#home" 
                        onClick={() => setActiveNav('#home')} 
                        className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                        >
                        <FaHome className="nav__icon" />
                                Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a 
                        href="#about"                         
                        onClick={() => setActiveNav('#about')} 
                        className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                        >
                        <FaUser className="nav__icon" />
                                About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills"                         onClick={() => setActiveNav('#skills')} 
                        className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                        <FaFileAlt className="nav__icon" />
                                Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#qualifications" onClick={() => setActiveNav('#qualifications')} 
                        className={activeNav === "#qualifications" ? "nav__link active-link" : "nav__link"}>
                        <FaBriefcase className="nav__icon" />
                                Qualifications
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio"                         onClick={() => setActiveNav('#portfolio')} 
                        className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                        <FaImage className="nav__icon" />
                                Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact"                         onClick={() => setActiveNav('#contact')} 
                        className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                        <FaEnvelope className="nav__icon" />
                                Contact Me!
                        </a>
                    </li>
                </ul>
                <FaTimes 
                        className="nav__close" 
                        onClick={handleToggle}
                />
            </div>

            <div 
            className="nav__toggle" 
            onClick={handleToggle}
            >
                <FaBars />
            </div>
        </nav>
    </header>
    );
}

export default Header;