import React from 'react'
import './Skills.scss'

import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '../../store/useStore'

function Skills() {

    const [state] = useStore()
    const { darkMode } = state

    return (
        <>
            <div className='skills section' id='skills' style={{ background: darkMode ? '#051418' : '' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='section-name'
                                style={{ color: darkMode ? 'white' : '' }}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >Skills</div>
                        </div>
                    </div>
                    <div className='row'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faHtml5} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>HTML</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faCss3Alt} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>CSS</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faJs} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>JavaScript</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faBootstrap} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>Bootstrap</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faReact} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>ReactJs</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faNodeJs} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>NodeJs</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='skill-item'>
                                <FontAwesomeIcon icon={faDatabase} className='skill-icon' style={{ color: darkMode ? 'white' : '' }} />
                                <span className='skill-name' style={{ color: darkMode ? 'white' : '' }}>MySql</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
