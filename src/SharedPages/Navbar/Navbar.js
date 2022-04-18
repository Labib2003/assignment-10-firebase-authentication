import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <nav className='bg-orange-400 shadow-sm shadow-gray-400'>
            <div className='w-full md:w-4/5 mx-auto py-3 px-1 flex justify-between text-xl font-semibold'>
                <Link className='h-full my-auto' to='/'>Guitar tutor</Link>
                <div className='w1/2 md:w-2/4 lg:w-1/3 lg:flex justify-between text-right'>
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/blogs'>Blogs</Link>
                    <br />
                    <Link to='/about'>About me</Link>
                    <br />
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

export default NavBar;