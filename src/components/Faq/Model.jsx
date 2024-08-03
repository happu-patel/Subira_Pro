import React, { useRef } from 'react';
import './Model.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ showModal, closeModal }) => {
  const modalRef = useRef();
  console.log("Modal component, showModal:", showModal);

  return (
    <div ref={modalRef} className={`modal ${showModal ? 'show' : ''}`} id="myModal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className='close-btn d-flex justify-content-end'>
            <button type="button" className="btn-close" onClick={closeModal} />
          </div>
          <div className="modal-header">
            <p className='modal-subtitle'>Contact us</p>
            <h4 className="modal-title">Get in touch</h4>
            <p className='supporting_text'>We’d love to hear from you. Please fill out this form.</p>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <form>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label>First name</label><br />
                  <input type='text' placeholder='First name' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label>Last name</label><br />
                  <input type='text' placeholder='Last name' />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <label>Email</label><br />
                  <input type='email' placeholder='you@company.com' className='mail' />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 phone'>
                  <label>Phone number</label><br />
                  <div className='input-group'>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Us</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/action">India</a></li>
                      <li><a className="dropdown-item" href="/another action">UK</a></li>
                      <li><a className="dropdown-item" href="/something">Ny</a></li>
                    </ul>
                    <input type="text" aria-label="Text input with dropdown button" placeholder='+1 (555) 000-0000' />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <label>Message</label><br />
                  <textarea></textarea>
                </div>
                <div className='submit-btn'>
                  <button type='submit'>Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
