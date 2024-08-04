import React from 'react';
import './portfolio.css';
import Card from './Card';

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
                    <h2 className="section__title">Portfolio</h2>
                    <span className="section__subtitle">Some of my work</span>

                    <div className="portfolio__container container grid">
                        <Card/>
                    </div>
        </section>
    );
}

export default Portfolio;