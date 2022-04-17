import React from 'react';

const Banner = () => {
    return (
        <div className='relative '>
            <div className='absolute z-10 top-1/2 w-full mx-auto text-white'>
                <h1 className='text-5xl font-bold'>Your personal guitar coach</h1>
                <h3 className='text-3xl font-semibold mt-3'>Ready to guide you to the magical world of music.</h3>
            </div>
            <img
                className='w-full'
                src="images/banner.jpg"
                alt="" />
        </div>
    );
};

export default Banner;