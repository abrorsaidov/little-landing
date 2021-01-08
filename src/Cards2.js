import React from 'react';

function Cards() {
    return (
        <div id='cards' className='container'>
            <div className='row d-flex justify-content-between align-items-center '>
                <div
                    className='card col-md-4 col-sm-12 p-0 card-div d-flex align-items-center '
                    // style={{ width: '400px' }}
                >
                    <div className='card-body d-flex justify-content-center flex-column align-items-center single-card '>
                        <img
                            src='https://randomuser.me/api/portraits/women/60.jpg'
                            className='rounded-circle  mb-5 mt-3'
                        ></img>
                        <p className='card-text text-center mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a
                            href='#'
                            className='btn btn-secondary btn-outline-light'
                        >
                            Join Me
                        </a>
                    </div>
                </div>
                <div
                    className='card col-md-4 col-sm-12 p-0 card-div d-flex align-items-center'
                    // style={{ width: '400px' }}
                >
                    <div className='card-body d-flex justify-content-center flex-column align-items-center single-card'>
                        <img
                            src='https://randomuser.me/api/portraits/men/41.jpg'
                            className='rounded-circle mb-5 mt-3 '
                        ></img>
                        <p className='card-text text-center mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a
                            href='#'
                            className='btn btn-secondary btn-outline-light'
                        >
                            Join Me
                        </a>
                    </div>
                </div>
                <div
                    className='card col-md-4 col-sm-12 p-0 card-div d-flex align-items-center '
                    // style={{ width: '400px' }}
                >
                    <div className='card-body d-flex justify-content-center flex-column align-items-center single-card'>
                        <img
                            src='https://randomuser.me/api/portraits/women/89.jpg'
                            className='rounded-circle mb-5 mt-3'
                        ></img>
                        <p className='card-text text-center  mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a
                            href='#'
                            className='btn btn-secondary btn-outline-light'
                        >
                            Join Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
