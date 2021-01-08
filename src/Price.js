import React from 'react';
import ppp from './pics/ppp.JPG';

function Price() {
    return (
        <div className='container' id='price'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-sm-12 prices-div'>
                    <h2>Service and Price</h2>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <p>
                        Excepteur...............................................................$45
                    </p>
                    <button className='btn btn-secondary'>Shop now</button>
                </div>
                <div className='col-md-6 col-sm-12 align-items-stretch d-flex prices-div '>
                    <img
                        // src='https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        src={ppp}
                        className=' prices-img'
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Price;
