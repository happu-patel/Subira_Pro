import React from 'react';
import './features.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Recipt from '../../assets/images/Featured icon.png';
import CheckIcon from '../../assets/images/Check icon.png';
import Sign from '../../assets/images/Sign document icon.png';


const Features = () => {
    return (
        <>

            <div className='container'>
                <div className='fea_content'>
                    <div className='feature_heading'>
                        <p className='title'>Features</p>
                        <h2>Tools that deliver more for less</h2>
                        <p className='subheading'>Sign documents online to confirm agreements, negotiate contracts and accept payments with legally-binding eSignatures.</p>
                    </div>
                </div>
            </div>
            <section className='invoice'>
                <div className='container'>
                    <div className='invoice_content d-flex'>
                        <div className='payment_content'>
                            <img src={Recipt} alt='featuredicon' />
                            <div className='info_payment'>
                                <h4>Invoices and payments</h4>
                                <p>Save time with invoices and tools for faster payments with better client experiences.Reduce the average payment time to less than 2 days and increase your close rate by 10%</p>
                            </div>
                            <div className='check-item'>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Easy-to-use features</p>
                                    </div>
                                </div>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Reusable and customisable templates</p>
                                    </div>
                                </div>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Enhance and optimise your cashflow</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sign'>
                <div className='container'>
                    <div className='sign_section d-flex justify-content-end'>
                        <div className='sign_content'>
                            <img src={Sign} alt='featuredicon' width={'48px'} />
                            <div className='info_sign'>
                                <h4>Sign documents easily and securely.</h4>
                                <p>Simplify the document signing process and bid goodbye  to the  stress of traditional document signing. Collect signatures from anywhere, on any device, with the convenience and security of Electronic Signatures from Subirapro</p>
                            </div>
                            <div className='check-item'>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Quick to start and easy to send</p>
                                    </div>
                                </div>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Track and prioritize unsigned documents</p>
                                    </div>
                                </div>
                                <div className='item1 d-flex'>
                                    <div className='item1_img d-flex me-3'>
                                        <img src={CheckIcon} alt='item1' />
                                    </div>
                                    <div className='item_info'>
                                        <p>Quickly reuse and resend popular documents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features
