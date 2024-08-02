import React from 'react';
import '../../App.css';
import './pricing.css';
import checkIcon from '../../assets/images/Check icon.png';
import HandArrow from '../../assets/images/Hand-drawn arrow.png'

const Pricing = () => {
    return (
        <>
            <section className='pricing_section'>
                <div className="container">
                    <div className="pricing_content">
                        <p className="mb-0">Pricing</p>
                        <h1>Simple, transparent pricing</h1>
                    </div>
                    <p className="pricing_subtext">We believe Subira Pro should be accessible to all companies, no matter the
                        size.</p>
                    <div className="packge_content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-md-4 mb-5 mb-sm-4">
                                <div className="popular-label">
                                    <img src={HandArrow} alt='arrow'/>
                                    <span className="text-end">Most popular</span>
                                </div>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title text-center pt-2">$10/mth
                                        </h5>
                                        <p className="card-subtext mb-0">Basic plan</p>
                                        <p className="subtext">Billed annually.</p>
                                        <div className="card-text d-flex pt-3 ps-3">
                                            <div className="check_icon">
                                                <img src={checkIcon} alt='checkicon'/>
                                            </div>
                                            <div className="card_info">
                                                <p>Access to all basic features</p>
                                            </div>
                                        </div>
                                        <div className="card-text d-flex ps-3">
                                            <div className="check_icon">
                                                <img src={checkIcon} alt='checkicon'/>
                                            </div>
                                            <div className="card_info">
                                                <p>Basic reporting and analytics</p>
                                            </div>
                                        </div>
                                        <div className="card-text d-flex ps-3">
                                            <div className="check_icon">
                                                <img src={checkIcon} alt='checkicon'/>
                                            </div>
                                            <div className="card_info">
                                                <p>Up to 10 individual users</p>
                                            </div>
                                        </div>
                                        <div className="card-text d-flex ps-3">
                                            <div className="check_icon">
                                                <img src={checkIcon} alt='checkicon'/>
                                            </div>
                                            <div className="card_info">
                                                <p>20GB individual data each user</p>
                                            </div>
                                        </div>
                                        <div className="card-text d-flex ps-3">
                                            <div className="check_icon">
                                                <img src={checkIcon} alt='checkicon'/>
                                            </div>
                                            <div className="card_info pb-4">
                                                <p>Basic chat and email support</p>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary1">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4 mb-sm-4  mb-5">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title text-center pt-2">$20/mth</h5>
                                        <p className="card-subtext mb-0">Business plan</p>
                                        <p className="subtext">Billed annually.</p>
                                        <div className="card-text">

                                            <div className="card-text d-flex pt-3 ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>200+ integrations</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Advanced reporting and analytics</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Up to 20 individual users</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>40GB individual data each user</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon}alt='checkicon' />
                                                </div>
                                                <div className="card_info pb-4">
                                                    <p>Priority chat and email support</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary1">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4 mb-sm-4  mb-5">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title text-center pt-2">$40/mth</h5>
                                        <p className="card-subtext mb-0">Enterprise plan</p>
                                        <p className="subtext">Billed annually.</p>
                                        <div className="card-text">
                                            <div className="card-text d-flex pt-3 ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Advanced custom fields</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Audit log and data history</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Unlimited individual users</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon'/>
                                                </div>
                                                <div className="card_info">
                                                    <p>Unlimited individual data</p>
                                                </div>
                                            </div>
                                            <div className="card-text d-flex ps-3">
                                                <div className="check_icon">
                                                    <img src={checkIcon} alt='checkicon' />
                                                </div>
                                                <div className="card_info pb-4">
                                                    <p>Personalised+priotity service</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary1">Get started</button>
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


export default Pricing
