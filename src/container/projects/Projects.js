import React from 'react'
import './Projects.scss'
import { useStore } from './../../store/useStore'

function Projects() {

    const [state] = useStore()
    const { darkMode } = state

    return (
        <>
            <div className='projects section' id='projects' style={{ background: darkMode ? '#072026' : '' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='section-name'
                                style={{ color: darkMode ? 'white' : '' }}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >Projects</div>
                        </div>
                    </div>
                    <div className='project-item'
                        data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <img className='project-img' src='/projects/1.jpg' />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='project-info'>
                                    <div className='project-name' style={{ color: darkMode ? 'white' : '' }}>E-Commerce Website</div>
                                    <div className='project-desc' style={{ color: darkMode ? 'white' : '' }}>
                                        An E-commerce website sell electronic devices: mobile, tablet, laptop, ...
                                        This product will bring the best experience to our customers.
                                    </div>
                                    <ul className='project-technologies'>
                                        <li>Front-end: HTML, CSS, Js, Bootstrap, ReactJs</li>
                                        <li>Back-end: NodeJs, Express, MySql</li>
                                    </ul>
                                    <div className='list-button'>
                                        <a className='button' href='https://ecommerce-website-vp.herokuapp.com/' target='_blank'>Live</a>
                                        <a className='button' href='https://github.com/longvp/ecommerce-react-node' target='_blank'>Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-item'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <img className='project-img' src='/projects/1.jpg' />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='project-info'>
                                    <div className='project-name' style={{ color: darkMode ? 'white' : '' }}>E-Commerce Website</div>
                                    <div className='project-desc' style={{ color: darkMode ? 'white' : '' }}>
                                        An E-commerce website sell electronic devices: mobile, tablet, laptop, ...
                                        This product will bring the best experience to our customers.
                                    </div>
                                    <ul className='project-technologies'>
                                        <li>Front-end: HTML, CSS, Js, Bootstrap, ReactJs</li>
                                        <li>Back-end: NodeJs, Express, MySql</li>
                                    </ul>
                                    <div className='list-button'>
                                        <a className='button' href='https://ecommerce-website-vp.herokuapp.com/' target='_blank'>Live</a>
                                        <a className='button' href='https://github.com/longvp/ecommerce-react-node' target='_blank'>Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects