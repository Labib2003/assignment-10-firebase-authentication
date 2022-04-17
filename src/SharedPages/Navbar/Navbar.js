import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-orange-400'>
            <div className='w-4/5 mx-auto py-3 flex justify-between text-xl font-semibold'>
                <p>Guitar tutor</p>
                <div className='w-1/4 flex justify-between'>
                    <p>Blogs</p>
                    <p>About me</p>
                    <p>Login/Register</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;