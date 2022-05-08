import React from 'react'
import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='footer-text'>
                                <FontAwesomeIcon icon={faCopyright} className='icon' />
                                <span>Copyright by Pham Viet Long</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
