import React from 'react';

function PostHero({ title, text, imgUrl, order }) {
    return (
        <div className='container' id='post-hero-grandpa'>
            <div className='row d-flex align-items-center justify-content-between'>
                <div
                    className={`post-hero-text col-sm-12 col-md-5 mt-4 mb-4 order-${order}`}
                >
                    <h2 className=''>{text}</h2>
                    {/* <p>{text}</p> */}
                </div>

                <img
                    src={imgUrl}
                    alt='something'
                    className='img-fluid col-sm-12 col-md-4'
                    id='post-hero-img'
                />
            </div>
        </div>
    );
}

export default PostHero;
