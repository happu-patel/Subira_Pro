import React, { useState } from 'react';
import '../../App.css';
import './footer.css';
import PlayCircle from '../../assets/images/play-circle.png';
import Logo from '../../assets/images/Mask group.png';
import Twitter from '../../assets/images/Twitter.png';
import Linkedin from '../../assets/images/Linkedin.png';
import Facebook from '../../assets/images/Facebook.png';
import DemoModal from './DemoModal';


const Footer = () => {
    const [showDemo, setShowDemo] = useState(false)

    const openDemo = () => {
        console.log('click')
        setShowDemo(true)
    }
    const closeDemo = () => {
        console.log('close')
        setShowDemo(false)
    }

    return (
        <>
            <footer className='footer_section'>
                <div className='container'>
                    <div className="f_content">
                        <h2>No long-term contracts. No catches. Simple.</h2>
                        <p>Start your 30-day free trial. Cancel anytime.</p>
                    </div>
                    <div className="f_button pt-2 pb-2">
                        <button className='view-btn' onClick={openDemo} type='button'>
                            <img src={PlayCircle} className="d-icon" alt='play'/>Request Demo </button>
                        <button className='footer_btn'>Get started</button>
                    </div>
                    <hr />
                    <div className="logo_links">
                        <img src={Logo} width="81px" alt='logo'/>
                        <p>Manage your documents easily!</p>
                    </div>
                    <div className="footer_menu">
                        <ul className="list list-inline">
                            <a href="#">
                                <li className="list-inline-item">Overview</li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">Features</li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">Pricing</li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">Careers</li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">Help</li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">Privacy</li>
                            </a>
                        </ul>
                    </div>
                    <hr />
                    <div className="footer_content d-flex align-items-center">
                        <div className="col-lg-9 col-md-9  f_text">
                            <p className="mb-0">© 2024 Subira Pro. All rights reserved.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 social-icon d-flex justify-content-end align-items-center">
                            <a href="#"><img src={Twitter} width="40px" alt='twitter'/></a>
                            <a href="#"><img src={Linkedin} width="40px" alt='linkedin'/></a>
                            <a href="#"><img src={Facebook} width="40px" alt='facebook'/></a>
                        </div>
                    </div>
                </div>
            </footer>
            <DemoModal showDemo={showDemo} closeDemo={closeDemo} />
            {/* Model Request demo */}


        </>
    )
}

export default Footer
