import React, { useState } from 'react'
import Avtar_group from '../../assets/images/Avatar group.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './page3.css'
import '../../App.css'
import CheckIcon from '../../assets/images/Check icon.png';
import Sign from '../../assets/images/Sign document icon.png';
import Feature2 from '../../assets/images/Feature Image.png';
import Mobile from '../../assets/images/iPhone 12 Pro mockup.png';
import quickIcon from '../../assets/images/Quick icon.png';
import Modal from '../Features/Model';
import Pricing from '../../components/Pricing/Pricing';

const Page3 = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        console.log("open")
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
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
            </section>.
            <section className='features_part2'>
                <div className='container'>
                    <div className='fea_content'>
                        <div className='feature_heading'>
                            <img src={quickIcon} width={'58px'} />
                            <h2>Generate and send invoices are coming soon...</h2>
                            <p className='subheading'>Our invoicing tool is coming soon! Add products and customers, set tax rates, and customize invoices to match your brand. Save templates in the Dashboard for easy reuse. Stay tuned for the launch!</p>
                        </div>
                    </div>
                    <div className='fea_img'>
                        <img src={Feature2} className='feature_content' />
                        <img src={Mobile} className='iphone_img' />
                    </div>
                </div>
            </section>
            <section className='faq_section'>
                <div className='container'>
                    <div className="faq_content">
                        <div className="faq_heading">
                            <h1>Frequently asked questions</h1>
                            <p>Everything you need to know about the product and billing.</p>
                        </div>
                    </div>
                    <div className="que_content">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is an electronic signature?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>An eSignature is a handwritten autograph of a person that can be created on various
                                            devices — from desktops to tablets
                                            to smartphones — with the help of the appropriate software. They’re used to confirm
                                            the integrity and authenticity of a
                                            signed document in its electronic form. eSignatures are advantageous features for
                                            certifying documents online quickly.
                                            And they help companies to conclude transactions, manage relevant records quickly
                                            and significantly save time and reduce
                                            expenses. Check it out!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is a digital signature the same as an electronic signature?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className=" accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>An eSignature is a handwritten autograph of a person that can be created on various
                                            devices — from desktops to tablets
                                            to smartphones — with the help of the appropriate software. They’re used to confirm
                                            the integrity and authenticity of a
                                            signed document in its electronic form. eSignatures are advantageous features for
                                            certifying documents online quickly.
                                            And they help companies to conclude transactions, manage relevant records quickly
                                            and significantly save time and reduce
                                            expenses. Check it out!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Will my signers need to purchase a Subirapro account?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>An eSignature is a handwritten autograph of a person that can be created on various
                                            devices — from desktops to tablets
                                            to smartphones — with the help of the appropriate software. They’re used to confirm
                                            the integrity and authenticity of a
                                            signed document in its electronic form. eSignatures are advantageous features for
                                            certifying documents online quickly.
                                            And they help companies to conclude transactions, manage relevant records quickly
                                            and significantly save time and reduce
                                            expenses. Check it out!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do I know when my document is signed?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>An eSignature is a handwritten autograph of a person that can be created on various
                                            devices — from desktops to tablets
                                            to smartphones — with the help of the appropriate software. They’re used to confirm
                                            the integrity and authenticity of a
                                            signed document in its electronic form. eSignatures are advantageous features for
                                            certifying documents online quickly.
                                            And they help companies to conclude transactions, manage relevant records quickly
                                            and significantly save time and reduce
                                            expenses. Check it out!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Is Subirapro payment secure?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>An eSignature is a handwritten autograph of a person that can be created on various
                                            devices — from desktops to tablets
                                            to smartphones — with the help of the appropriate software. They’re used to confirm
                                            the integrity and authenticity of a
                                            signed document in its electronic form. eSignatures are advantageous features for
                                            certifying documents online quickly.
                                            And they help companies to conclude transactions, manage relevant records quickly
                                            and significantly save time and reduce
                                            expenses. Check it out!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='avtar_section'>
                <div className="container">
                    <div className="avtar_content">
                        <div className="avtar_group">
                            <div className="avtar1">
                                <img src={Avtar_group} width="120px" />
                            </div>
                        </div>
                        <div className="avtar_heading">
                            <h3>Still have questions?</h3>
                            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        </div>
                        <div className="avtar_button">
                            <button className="button-avtar" type="button" onClick={openModal} >
                                Get in touch
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <Modal showModal={showModal} closeModal={closeModal} />
            <Pricing />
        </>
    )
}

export default Page3