import React, { useRef } from 'react';
import './Model.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ showModal, closeModal }) => {
  const modalRef = useRef();
  console.log("Modal component, showModal:", showModal);

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
      
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
