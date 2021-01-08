import React from 'react';

function News() {
    return (
        <div id='news' className='container p-5'>
            <div className='d-flex flex-column justify-content-center'>
                <h1>News about Us</h1>
                <p>What are these big-name brands talking about us</p>
            </div>
            <div className='row news-row '>
                <div className='col-md-3 col-sm-12'>
                    <div className='news-logo mt-2 p-5 rounded-lg d-flex align-items-center justify-content-center '>
                        <h1 className='forbes'>Forbes</h1>
                    </div>
                    {/* <p className='mt-2'>
                        Forbes announced the brand new list of successful
                        businesses of the year
                    </p> */}
                </div>
                <div className='col-md-1 col-sm-12'>
                    <br />
                    <br />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='news-logo mt-2 p-5 rounded-lg d-flex align-items-center justify-content-center news-side '>
                        <h1 className='billboard'>Billboard</h1>
                    </div>
                    {/* <p className='mt-2'>
                        Billboard's A&Rs started paying attention to Next Door
                    </p> */}
                </div>
                <div className='col-md-1 col-sm-12'>
                    <br />
                    <br />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <div className='news-logo mt-2 p-5 rounded-lg d-flex align-items-center justify-content-center'>
                        <h1 className='riaa'>RIIA</h1>
                    </div>
                    {/* <p className='mt-2'>
                        A Next Door release received the first RIIA certificate
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default News;
