import React from 'react';
import './about.css';
import AboutImg from '../../assets/jp2.jpg'
import Info from './Info';
import CV from "../../assets/Jatin_Pathak.pdf";
import FileSvg from '../../assets/files.svg';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
                <span className="section__subtitle">
                    My Introduction
                </span>
                <div className="about__container container grid">
                    <img src={AboutImg} className='about__img' alt="about-image" />
                    <div className="about__data">
                        <Info/>
                        <p className="about__description">
                        Frontend developer, I create web pages with UI / UX user interface.
                        </p>
                        <a download="" href={CV} className="button button--flex">
                            Download CV
                            <img src={FileSvg} alt="file-svg" />
                        </a>
                    </div>
                </div>
        </section>
    );
        
}

export default About