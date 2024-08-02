import '../../App.css';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Mask group.png';
import PlayCircle from '../../assets/images/play-circle.png';
import MacBook from '../../assets/images/MacBook Pro 16.png';
import MacBookContent from '../../assets/images/Image1.png';
const Header = () => {

    return (
        <>
            {/* Hello world */}
            <nav className="navbar navbar-expand-lg align-items-center">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width={'106px'} alt='logo' />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/resouces"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resources
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/action">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/anothe">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/something">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true" to='/about'>
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                        <div className='nav-btn'>
                            <button className="btn btn-login" type="submit">
                                Log in
                            </button>
                            <button className="btn btn-primary" type="submit">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <header className='bg-body-tertiary'>
                <div className='container'>
                    <div className='header-content'>
                        <h1>Bring your business workflow to life</h1>
                        <p>Expedite your workflow  with Same-day deal signing and payment.</p>
                        <p>Create and issue online invoices, allowing recipients to pay immediately. Subirapro  is an easy and <br /> affordable solution for small and medium businesses to accept payments.</p>
                    </div>
                    <div className='header_buttons'>
                        <a href='demo'>
                            <button className='demo-btn'>
                                <img src={PlayCircle} alt='playicon' className='d-icon' />
                                <span>Request Demo</span>
                            </button>
                        </a>
                        <a href='signup'>
                            <button className="sign-btn" type="submit">
                                Sign up
                            </button>
                        </a>
                    </div>
                    <div className='macBook'>
                        <div className='black_img'>
                            <img src={MacBook} alt='macbook' />
                        </div>
                        <div className='mac_info'>
                            <img src={MacBookContent} alt='imgContent' />
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
};

export default Header;
