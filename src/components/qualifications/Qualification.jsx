import React , {useState} from 'react';
import './qualification.css';
import {FaGraduationCap , FaBriefcase , FaCalendar} from 'react-icons/fa';

const Qualification = () => {
    const [toggleState , setToggleState] = useState(1);
    function handleToggle(idx){
        setToggleState(idx);
    }
    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personel Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex" onClick={() => handleToggle(1)}>
                        <FaGraduationCap />{" "} Education
                    </div>
                    <div className="qualification__button qualification__active button--flex" onClick={() => handleToggle(2)}>
                        <FaBriefcase />{" "} Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data data1">
                            <div></div>
                            {/*college */}
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">B.Tech in Information Technology</h3>
                                <span className="qualification__subtitle">Ramrao Adik Institue of Technology</span>
                                <div className="qualification__calender">
                                    <FaCalendar /> 2022-Present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                                {/*HS */}
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Lakshya Junior College & High School</span>
                                <div className="qualification__calender">
                                    <FaCalendar/> 2020-2022
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data data3">
                            <div></div>
                                {/*school*/}
                                <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">School</h3>
                                <span className="qualification__subtitle">ST.Thomas Convent High School</span>
                                <div className="qualification__calender">
                                    <FaCalendar/> 2020
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full stack Developer Intern</h3>
                                <span className="qualification__subtitle">Blue Address , Powai</span>
                                <div className="qualification__calender">
                                    <FaCalendar /> May 2025-Present
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Frontend Developer Intern</h3>
                                <span className="qualification__subtitle">R.V Networking , Nerul</span>
                                <div className="qualification__calender">
                                    <FaCalendar /> September 2024-February 2025
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                                
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Technical Head</h3>
                                <span className="qualification__subtitle">CSI RAIT</span>
                                <div className="qualification__calender">
                                    <FaCalendar/> August 2024 - June 2025
                                </div>
                            </div>


                        </div>

                    </div>


                    
                </div>
            </div>
        </section>
    );
}

export default Qualification;