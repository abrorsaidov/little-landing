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
                        <h4 className='card-title mb-5'>Our Products</h4>
                        <p className='card-text text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a href='#' className='btn btn-secondary'>
                            Read More
                        </a>
                    </div>
                </div>
                <div
                    className='card col-md-4 col-sm-12 p-0 card-div d-flex align-items-center'
                    // style={{ width: '400px' }}
                >
                    <div className='card-body d-flex justify-content-center flex-column align-items-center single-card'>
                        <h4 className='card-title mb-5'>Specials</h4>
                        <p className='card-text text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a href='#' className='btn btn-secondary'>
                            Read More
                        </a>
                    </div>
                </div>
                <div
                    className='card col-md-4 col-sm-12 p-0 card-div d-flex align-items-center '
                    // style={{ width: '400px' }}
                >
                    <div className='card-body d-flex justify-content-center flex-column align-items-center single-card'>
                        <h4 className='card-title mb-5'>Care Lips</h4>
                        <p className='card-text text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque efficitur ullamcorper
                            condimentum. Donec sed accumsan eros. In non
                            fermentum risus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <a href='#' className='btn btn-secondary'>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
