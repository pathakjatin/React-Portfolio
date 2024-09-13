import React from 'react';
import {FaGithub , FaArrowRight} from 'react-icons/fa';
import todoImg from '../../assets/Screenshot 2024-08-03 222919.png';
import signLangImg from '../../assets/Screenshot 2024-08-03 235904.png'
import petConnImg from '../../assets/Screenshot 2024-08-03 231744.png'
import investCalImg from '../../assets/Screenshot 2024-08-03 233757.png';
import taskSphereImg from '../../assets/Screenshot 2024-08-03 234254.png';
import spotifyImg from '../../assets/Screenshot 2024-08-04 020241.png';

const Card = () => {
    return (
        <div className="portfolio__box">
            <div className="portfolio__card">
                <img src={todoImg} alt="todo app image" />
                <h3 className="portfolio__title">ToDo List</h3>
                <p className="portfolio__subtitle">A todo list app made using <b>HTML, CSS & Javascript</b> which uses local storage of the browser</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/todo-list" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="https://pathakjatin.github.io/todo-list/#" target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>

            <div className="portfolio__card">
                <img src={petConnImg} alt="" />
                <h3 className="portfolio__title">PetConnect</h3>
                <p className="portfolio__subtitle">A responsive website that allows users to find a diet for their beloved pets.</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/PetConnect" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/PetConnect" target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>

            </div>

            <div className="portfolio__card">
                <img src={spotifyImg} alt="" />
                <h3 className="portfolio__title">Spotify Clone</h3>
                <p className="portfolio__subtitle">An ad-free spotify clone website featuring my friend's favourite top songs </p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/spotifyClone" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/spotifyClone" target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>

            <div className="portfolio__card">
                <img src={signLangImg} alt="" />
                <h3 className="portfolio__title">Sign Language Recognition System</h3>
                <p className="portfolio__subtitle">A model which detects sign language and converts it into english letters</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/Sign-Language-Recognition-System" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/Sign-Language-Recognition-System" target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>

            <div className="portfolio__card">
                <img src={investCalImg} alt="" />
                <h3 className="portfolio__title">Investment Calculator</h3>
                <p className="portfolio__subtitle">A React app that calculates investment made over years</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/Investment-Calculator" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/Investment-Calculator" target="_blank" rel="noreferrer">
                    Visit Site <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>

            <div className="portfolio__card">
                <img src={taskSphereImg} alt="" id="ts"/>
                <h3 className="portfolio__title">TaskSphere</h3>
                <p className="portfolio__subtitle">A MERN stack task management app.</p>
                <div className="portfolio__buttons">
                <button className="button button--flex portfolio__button">
                    <a href="https://github.com/pathakjatin/" target="_blank" rel="noreferrer"> 
                    GitHub <FaGithub className="portfolio__icon"/>
                    </a>
                </button>
                <button className="button button--flex portfolio__button">
                    <a href="#">
                    Soon.. <FaArrowRight className="portfolio__icon"/>
                    </a>
                </button>
                </div>
            </div>

        </div>
    );
}

export default Card;