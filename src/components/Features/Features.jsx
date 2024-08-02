import React from 'react';
import './features.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Recipt from '../../assets/images/Featured icon.png';
import CheckIcon from '../../assets/images/Check icon.png';
import Sign from '../../assets/images/Sign document icon.png';
import Feature2 from '../../assets/images/Feature Image.png';
import Mobile from '../../assets/images/iPhone 12 Pro mockup.png';
import Email from '../../assets/images/Email Icon.png';
import EasyMoney from '../../assets/images/Quick icon.png';
import Stack from '../../assets/images/Stack icon.png';
import { GoArrowRight } from "react-icons/go";


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
            <section className='features_part2'>
                <div className='container'>
                    <div className='fea_content'>
                        <div className='feature_heading'>
                            <p className='title'>Features</p>
                            <h2>Generate and send invoices</h2>
                            <p className='subheading'>Add a product and customer information to create an invoice. Manually set a tax rate or automatically collect sales taxes. Customise your invoice to match your brand. Utilize templates by saving details in the Dashboard so you’re not starting from scratch with each invoice.</p>
                        </div>
                    </div>
                    <div className='fea_img'>
                        <img src={Feature2} className='feature_content' alt='feature' />
                        <img src={Mobile} className='iphone_img' alt='iphone'/>
                    </div>
                </div>
            </section>
            <section className='features_info'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={Email} width="48px" alt='email'/>
                            </div>
                            <div className="title">
                                <p>Send an invoice</p>
                            </div>
                            <div className="description">
                                <p>Send an invoice via unique link. Customers can also download a PDF invoice online. Each
                                    invoice is optimised for mobile,
                                    tablet, and desktop.</p>
                            </div>
                            <div className="fea_button">
                                <a href="#">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={EasyMoney} width="48px" alt='easymoney'/>
                            </div>
                            <div className="title">
                                <p>Keep sight of your money</p>
                            </div>
                            <div className="description">
                                <p>Your customers get reminders to letting them know when a payment is due, and get
                                    real-time alerts when they pay.</p>
                            </div>
                            <div className="fea_button">
                                <a href="#">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={Stack} width="48px" alt='stack'/>
                            </div>
                            <div className="title">
                                <p>Easy online payments</p>
                            </div>
                            <div className="description">
                                <p>Skip trips to the bank by choosing to go digital. Several options to receive your money
                                    paper-free.Get quicker access to
                                    your money.</p>
                            </div>
                            <div className="fea_button">
                                <a href="#">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={Email} width="48px" alt='email'/>
                            </div>
                            <div className="title mt-2">
                                <p>Recover more revenue</p>
                            </div>
                            <div className="description">
                                <p>Automatically send email reminders when invoices are due or overdue. Subirapro makes it
                                    easier to receive and record
                                    payments.</p>
                            </div>
                            <div className="fea_button pt-2">
                                <a href="#">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={EasyMoney} width="48px" alt='easymoney'/>
                            </div>
                            <div className="title mt-2">
                                <p>Quick invoicing</p>
                            </div>
                            <div className="description">
                                <p>Take advantage of the easy to use invoicing tool and save time so your customers can be
                                    ready to pay you on time in a
                                    hassle free process.</p>
                            </div>
                            <div className="fea_button  pt-2">
                                <a href="#">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon">
                                <img src={Stack} width="48px" alt='stack'/>
                            </div>
                            <div className="title mt-2">
                                <p>Invoices paid all at once</p>
                            </div>
                            <div className="description">
                                <p>Unlike e-transfers, bank payments can pay high value invoices in just one payment. And
                                    with our affordable 1% fee, you
                                    can keep more.</p>
                            </div>
                            <div className="fea_button  pt-2">
                                <a href="/learn">Learn more <GoArrowRight className='rightarrow' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
