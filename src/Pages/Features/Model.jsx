// Modal.js
import React from 'react';
import './Model.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Modal = ({ showModal, closeModal }) => {
  // You can customize the modal content as needed
  return (
       <div className={`modal fade ${showModal ? 'show d-block' : 'd-none'}`} id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
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
                <div className='col-lg-6 clo-md-6 col-sm-12'>
                  <label>First name</label><br/>
                  <input type='text' placeholder='First name' />
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
