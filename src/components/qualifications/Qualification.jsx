import React from 'react';
import './qualification.css';
import {FaGraduationCap , FaCalendar} from 'react-icons/fa';

const Qualification = () => {
    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personel Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <FaGraduationCap />{" "} Education
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">

                        <div className="qualification__data">
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

                        <div className="qualification__data">
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
                </div>
            </div>
        </section>
    );
}

export default Qualification;