import React from 'react';

function WhatTheySay() {
    return (
        <div className='container' id='what-they-say'>
            <div className='row'>
                <div className='col-md-5 mt-5 col-sm-12'>
                    <form>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='pwd'>Email:</label>
                            <input
                                type='password'
                                className='form-control'
                                id='pwd'
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-secondary float-right '
                        >
                            Submit ➡️
                        </button>
                    </form>
                </div>
                <div className='col-md-7 col-sm-12 mt-5 d-flex justify-content-center align-items-center what-they-say-div'>
                    <img
                        src='https://www.civhc.org/wp-content/uploads/2018/10/question-mark-768x768.png'
                        className='w-25 mr-5 '
                    ></img>
                    <div>
                        <h3>What They Say</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse semper lacus eu interdum
                            scelerisque. Nam lobortis varius ligula at luctus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatTheySay;
