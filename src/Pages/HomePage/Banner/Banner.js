import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute bottom-5 md:bottom-20 lg:bottom-32 z-10 w-full text-white'>
                <h1 className='text-xl md:text-5xl font-bold'>Your personal guitar coach</h1>
                <h3 className='text-3xl font-semibold mt-3 hidden md:block'>Ready to guide you to the magical world of music.</h3>
            </div>
            <img
                className='w-full'
                src="images/banner.jpg"
                alt="" />
        </div>
    );
};

export default Banner;