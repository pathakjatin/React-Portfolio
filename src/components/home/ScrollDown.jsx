import React from 'react'
import scrollSvg from '../../assets/scroll.svg'
import {FaArrowDown} from 'react-icons/fa';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="" className="home__scroll-button button--flex">
            <img src={scrollSvg} alt="scroll-down-icon" />
            <span className="home__scroll-name">
                Scroll Down
            </span>
            <FaArrowDown className='home__scroll-arrow'/>
        </a>
    </div>
  )
}

export default ScrollDown;