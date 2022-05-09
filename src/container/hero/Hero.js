import React from 'react'
import './Hero.scss'
import Typical from 'react-typical'
import { faFacebook, faGooglePlus, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStore } from '../../store/useStore'

import avatar from '../../assets/avatar.jpg'
import cv from '../../assets/cv.pdf'

function Hero() {

    const [state] = useStore()
    const { darkMode } = state

    return (
        <>
            <div className='hero' id='home' style={{ background: darkMode ? '#051418' : '', clipPath: darkMode ? 'none' : 'ellipse(100% 100% at top)' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='hero-left'>
                                <ul className='social-list'>
                                    <li className='social-item'>
                                        <FontAwesomeIcon icon={faFacebook} className='social-icon social-icon-facebook' />
                                    </li>
                                    <li className='social-item'>
                                        <FontAwesomeIcon icon={faGooglePlus} className='social-icon social-icon-google' />
                                    </li>
                                    <li className='social-item'>
                                        <FontAwesomeIcon icon={faYoutube} className='social-icon social-icon-youtube' />
                                    </li>
                                    <li className='social-item'>
                                        <FontAwesomeIcon icon={faTwitter} className='social-icon social-icon-twitter' />
                                    </li>
                                </ul>
                                <div className='introduce'>
                                    <div className='introduce-title' style={{ color: darkMode ? 'white' : '' }}>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                `I'm a web developer`,
                                                1000,
                                                `And i love beautiful girls`,
                                                1000,
                                            ]}
                                            wrapper="h1"
                                        />
                                    </div>
                                    <div className='introduce-desc'>
                                        Knack of building applications with front end and back end operations
                                    </div>
                                </div>
                                <div className='list-button'>
                                    <a href='#contact' className='button'>Hire me</a>
                                    <a href={cv} download='phamvietlong-cv.pdf' className='button'>Get CV</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='box-avatar'>
                                <img className='avatar' src={avatar} alt='avatar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero