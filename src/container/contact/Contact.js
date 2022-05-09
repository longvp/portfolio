import React from 'react'
import './Contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useStore } from './../../store/useStore'

function Contact() {

    const [state] = useStore()
    const { darkMode } = state

    return (
        <>
            <div className='contact section' id='contact' style={{ background: darkMode ? '#051418' : '' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='section-name'
                                style={{ color: darkMode ? 'white' : '' }}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >Contact me</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'
                            data-aos="zoom-in"
                            data-aos-duration="1500">
                            <div className='title' style={{ color: darkMode ? 'white' : '' }}>Contact info</div>
                            <ul className='list-info'>
                                <li className='info-item'>
                                    <FontAwesomeIcon icon={faLocationDot} className='info-icon' style={{ color: darkMode ? 'white' : '' }} />
                                    <span className='info-text' style={{ color: darkMode ? 'white' : '' }}>Ha Noi, Viet Nam</span>
                                </li>
                                <li className='info-item'>
                                    <FontAwesomeIcon icon={faPhone} className='info-icon' style={{ color: darkMode ? 'white' : '' }} />
                                    <span className='info-text' style={{ color: darkMode ? 'white' : '' }}>0368090208</span>
                                </li>
                                <li className='info-item'>
                                    <FontAwesomeIcon icon={faEnvelope} className='info-icon' style={{ color: darkMode ? 'white' : '' }} />
                                    <span className='info-text' style={{ color: darkMode ? 'white' : '' }}>phamvietlong.pass@gmail.com</span>
                                </li>
                                <li className='info-item'>
                                    <FontAwesomeIcon icon={faHome} className='info-icon' style={{ color: darkMode ? 'white' : '' }} />
                                    <span className='info-text' style={{ color: darkMode ? 'white' : '' }}><a href='https://phamvietlong.herokuapp.com'>https://phamvietlong.herokuapp.com</a></span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            <div className='title' style={{ color: darkMode ? 'white' : '' }}>Contact form</div>
                            <div className='form'>
                                <div className="text-field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className='text' id="name" placeholder="Name..." />
                                </div>
                                <div className="text-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className='text' id="email" placeholder="Email..." />
                                </div>
                                <div className="text-field">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className='text' id="subject" placeholder="Subject..." />
                                </div>
                                <div className="text-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" className='text' rows='10' id="message" placeholder="Message..." />
                                </div>
                            </div>
                            <button className='button-send'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact