import React from 'react'
import { useStore } from '../../store/useStore'
import './About.scss'

function About() {

    const [state] = useStore()
    const { darkMode } = state

    return (
        <>
            <div className='about section' id='about'
                style={{ background: darkMode ? '#072026' : '' }}
            >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='section-name'
                                style={{ color: darkMode ? 'white' : '' }}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >About me</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            <div className='title' style={{ color: darkMode ? 'white' : '' }}>Get to know me</div>
                            <p className='text'>
                                My name is Pham Viet Long. <span></span>
                                I started learning how to code in January 2021
                                and spent most of my day experimenting
                                with HTML, CSS and JavaScript, React. <span></span>
                                I enjoy coding and the challenge of learning
                                something new everyday.
                                My goal is to pursue a career in the field of front-end development. <span></span>
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            data-aos-easing="linear">
                            <div className='title' style={{ color: darkMode ? 'white' : '' }}>Education</div>
                            <ul className='education-list'>
                                <li className='education-item'>
                                    <div className='education-year'>2018 - 2023</div>
                                    <div className='education-school' style={{ color: darkMode ? 'white' : '' }}>post and telecommunications institute of technology</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About