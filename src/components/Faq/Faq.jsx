import React, { useState } from 'react';
import '../../App.css';
import './Faq.css';
import Avtar_group from '../../assets/images/Avatar group.png';
import Modal from './Model';


const Faq = () => {
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
                    <div class="avtar_content">
                        <div class="avtar_group">
                            <div class="avtar1">
                                <img src={Avtar_group} width="120px" alt='avtar' />
                            </div>
                        </div>
                        <div class="avtar_heading">
                            <h3>Still have questions?</h3>
                            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        </div>
                        <div class="avtar_button">
                            <button class="button-avtar" onClick={openModal}>Get in touch</button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal showModal={showModal} closeModal={closeModal} />
        </>
    )
}

export default Faq
