import React from 'react';

const Banner = () => {
    return (
        <div class="hero" style={{  
            backgroundImage: `url("images/banner.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div class="hero-overlay bg-black bg-opacity-25"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-2xl py-32">
                    <h1 class="mb-5 text-5xl font-bold">Your personal guitar coach</h1>
                    <p class="mb-5">Ready to guide you to the magical world of music.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;