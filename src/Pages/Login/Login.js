import React, { useRef, useState } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const handlePassReset = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Please check your mail!');
    }

    if (user || googleUser) {
        navigate('/home');
    }

    return (
        <div className='w-4/5 mx-auto my-5'>
            <h3 className='text-3xl font-semibold'>Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    ref={emailRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="email"
                    name=""
                    placeholder='Email'
                    required />
                <input
                    ref={passwordRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="password"
                    name=""
                    placeholder='Password'
                    required />
                <p className='text-xl font-semibold text-red-500 my-3'>{error ? error.message : ''}</p>
                <input
                    className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 rounded-md'
                    type="submit"
                    value="Login" />
                <p className='text-xl my-3'>Forgot password? <span onClick={handlePassReset} className='text-orange-400 hover:text-orange-500 cursor-pointer font-semibold'>Get password reset email.</span></p>
            </form>
            <button
                onClick={() => signInWithGoogle()}
                className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 rounded-md'>Continue with Google</button>
            <p className='text-xl my-3'>New to Guitar tutor? <Link className='text-orange-400 hover:text-orange-600 font-semibold' to='/register'>Create an Account!</Link></p>
           <p className='text-xl font-semibold'><ToastContainer/></p>
        </div>
    );
};

export default Login;