import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    
    return (
        <nav className='bg-white shadow-sm shadow-gray-400'>
            <div className='w-4/5 mx-auto py-3 flex justify-between text-xl font-semibold'>
                <Link to='/'>Guitar tutor</Link>
                <div className='w-1/4 flex justify-between'>
                    <p>Blogs</p>
                    <Link to='/about'>About me</Link>
                    {
                        user ?
                            <p onClick={handleSignOut} className='cursor-pointer'>Sign Out</p>
                            :
                            <Link to='/login'>Login/Register</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;