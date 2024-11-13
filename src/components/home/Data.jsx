import React from 'react';
import handSvg from '../../assets/hand.svg';
import sendSvg from '../../assets/send.svg';
import Typewriter from 'typewriter-effect';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Jatin Pathak 
            <img src={handSvg} alt="hand-icon"></img>
        </h1>
        <h3 className="home__subtitle">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Developer",
                "UI/UX Designer",
                "JavaScript Enthusiast",
                "Data Science Enthusiast",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 70,
            }}
        />
        </h3>
        <p className="home__description">
        I'm a creative frontend developer based in India, and I'm very passionate and dedicated to my work.
        </p>

        <a href="#contact" className="button button--flex">
            Say Hello 
             <img src={sendSvg} alt="send-icon"></img>
        </a>
    </div>
  )
}

export default Data