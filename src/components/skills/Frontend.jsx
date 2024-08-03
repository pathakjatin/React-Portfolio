import React from 'react'
import {FaCertificate} from 'react-icons/fa';

const Frontend = () => {
    return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend development</h3>
            
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
            <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">React </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">
                            Basic
                        </span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaCertificate className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">
                            Basic
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Frontend;