import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-orange-400'>
            <div className='w-4/5 mx-auto py-3 flex justify-between text-xl font-semibold'>
                <Link to='/'>Guitar tutor</Link>
                <div className='w-1/4 flex justify-between'>
                    <p>Blogs</p>
                    <p>About me</p>
                    <Link to='/login'>Login/Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;