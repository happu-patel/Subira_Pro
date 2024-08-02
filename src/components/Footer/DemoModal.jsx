import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './demomodal.css';
import '../../App.css';
import DemoIcon from '../../assets/images/Request icon.png';


const DemoModal = ({ showDemo, closeDemo }) => {
    return (
        <>

            <div className={`modal ${showDemo ? 'show' : ''}`}
                id="exampleModal">
                <div className="modal-dialog  modal-dialog-centered screen3modal">
                    <div className="modal-content">
                        <div className="screen3-modal-header">
                            <div className='modal-icon'>
                                <img src={DemoIcon} alt='demoicon'/>
                            </div>
                            <h3 className='modal-heading'>Request Demo</h3>
                            <p className='modal-subtitle'>Enter your email address to get access to the demo video.</p>
                        </div>
                        <div className="modal-body">
                            <label>Email</label><br />
                            <input type='email' placeholder="you@example.com" />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn-cancel"
                                data-bs-dismiss="modal"
                                onClick={closeDemo}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn-request">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemoModal
