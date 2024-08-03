import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

    import './contact.css';
    import {FaEnvelope , FaInstagram , FaGithub} from 'react-icons/fa';
    import sendSvg from '../../assets/send.svg';

    const Contact = () => {

        const form = useRef();

            const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
                .sendForm('service_8abgc7o', 'template_x17hj5w', form.current, {
                publicKey: 'K0iYp7gFcxPj5ddZ7',
                })
                e.target.reset();
            };

        return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to Me</h3>

                <div className="contact__info">
                <div className="contact__card">
                    <FaEnvelope />
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">
                    workjatinpathak@gmail.com
                    </span>

                    <a
                    href="mailto:workjatinpathak@gmail.com"
                    className="contact__button"
                    >
                    Write Me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <FaInstagram />
                    <h3 className="contact__card-title">Instagram</h3>
                    <span className="contact__card-data">pathakjatin_</span>

                    <a
                    href="https://www.instagram.com/pathakjatin_/"
                    className="contact__button"
                    >
                    Write Me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <FaGithub />
                    <h3 className="contact__card-title">GitHub</h3>
                    <span className="contact__card-data">pathakjatin</span>

                    <a
                    href="https://github.com/pathakjatin"
                    className="contact__button"
                    >
                    Write Me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your projects</h3>

                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                <div className="contact__form-div">
                    <label className="contact__form-tag">Name</label>
                    <input
                    type="text"
                    name="name"
                    className="contact__form-input"
                    placeholder="Insert your name"
                    />
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="contact__form-input"
                    placeholder="Insert your email"
                    />
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag">Project</label>
                    <textarea
                    name="project"
                    cols="30"
                    row="10"
                    className="contact__form-input contact__form-area"
                    placeholder="Write your project"
                    ></textarea>
                </div>

                <button className="button button--flex contact__btn">
                    Send Message
                    <img src={sendSvg} alt="send-icon"></img>
                </button>
                </form>
            </div>
            </div>
        </section>
        );
    }

    export default Contact;