import React, { Fragment } from 'react';

function Header() {
    return (
        <Fragment>
            <nav
                id='nav-bar'
                className='navbar navbar-expand-sm navbar-dark sticky-top '
            >
                <div className='container '>
                    <a className='navbar-brand ' href='#next-door'>
                        <span id='logo'>Next Door</span>
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapsibleNavbar'
                    >
                        <i class='fas fa-hamburger'></i>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='collapsibleNavbar'
                    >
                        <ul className='nav-links d-flex justify-content-center  navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#services'>
                                    Music Distribution
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#news'>
                                    News
                                </a>
                            </li>
                            {/* <li>
                                <a className='navbar-brand ' href='#next-door'>
                                    <span id='logo'>Next Door</span>
                                </a>
                            </li> */}
                            <li className='nav-item'>
                                <a className='nav-link' href='#cards'>
                                    Artists
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#footer'>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
