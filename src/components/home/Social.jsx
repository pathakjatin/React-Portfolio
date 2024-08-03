import React from 'react'
import { FaInstagram , FaGithub , FaCode} from 'react-icons/fa';

const Social = () => {
  return (
    <div className="home__social">
        <a 
        href="https://www.instagram.com/pathakjatin_/" 
        target='_blank' className="home__social-icon">
            <FaInstagram />
        </a>
        <a 
        href="https://github.com/pathakjatin" 
        target='_blank' 
        className="home__social-icon">
            <FaGithub />
        </a>
        <a 
        href="https://leetcode.com/u/pathakjatin/" 
        target='_blank' 
        className="home__social-icon">
            <FaCode />
        </a>
    </div>
  )
}

export default Social;