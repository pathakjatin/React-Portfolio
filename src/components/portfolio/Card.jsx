import React from 'react';
import {FaGithub , FaArrowRight} from 'react-icons/fa';
const Card = ({image , title , description , githublink , projectlink}) => {
    return (
            <div className="portfolio__card">
                <img src={image} alt={title} />
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__subtitle">{description}</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href={githublink} target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href={projectlink} target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>
    );
}

export default Card;