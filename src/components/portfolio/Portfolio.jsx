import React from 'react';
import './portfolio.css';
import Card from './Card';
import { project_data } from './Projects';

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
                    <h2 className="section__title">Portfolio</h2>
                    <span className="section__subtitle">Some of my work</span>
                    <div className="portfolio__container">
                        <div className="portfolio__box">
                            {project_data.map((item) =>
                                (<Card key={item.image} {...item}/>)
                            )}
                        </div>
                    </div>
        </section>
    );
}

export default Portfolio;