import React from 'react';

function Footer() {
    return (
        <div
            id='footer'
            className='container pb-3 flex-column d-flex  justify-content-center'
        >
            <div className='container footer-container '>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 d-flex mb-4 justify-content-center'>
                        <div className=' footer-div '></div>
                    </div>
                    <div className='col-md-4 col-sm-12 d-flex mb-4 justify-content-center'>
                        <div className=' footer-div '></div>
                    </div>
                    <div className='col-md-4 col-sm-12 d-flex mb-4 justify-content-center'>
                        <div className=' footer-div '></div>
                    </div>
                </div>
            </div>
            <div
                id='footer-row'
                className='container row d-flex justify-content-around w-10'
            >
                <div className='footers col-md-2 col-sm-12 align-items-center d-flex'>
                    <a className='navbar-brand ' href='#next-door'>
                        <span id='logo'>Next Door</span>
                    </a>
                    <p>
                        <span>&copy; </span>Next Door AB. 2020. All rigts
                        reserved.
                    </p>
                </div>
                <div className='footers col-md-2 col-sm-12 align-items-center d-flex'>
                    <ul className='text-center'>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footers col-md-4 col-sm-12 align-items-center d-flex'>
                    <p>Subscribe to our newsletter</p>
                    <input type='text' />
                    <br />
                    <button type='submit' className='btn btn-dark'>
                        Subscribe
                    </button>
                </div>
                <div className='footers col-md-2 col-sm-12 align-items-center d-flex'>
                    <ul>
                        <li>
                            <i class='fab fa-facebook-square'></i> Facebook
                        </li>
                        <li>
                            <i class='fab fa-instagram'></i> Instagram
                        </li>
                        <li>
                            <i class='fab fa-twitter'></i> Twitter
                        </li>
                    </ul>
                </div>
                <div className='footers col-md-2 col-sm-12 align-items-center d-flex'>
                    <ul className='text-center'>
                        <li>456 Evergreen ST., Roseville CA 978746</li>
                        <li>+44 343 33 44</li>
                        <li>nextdoor@biz.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
