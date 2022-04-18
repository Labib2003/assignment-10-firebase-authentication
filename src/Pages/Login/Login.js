import React, { useRef, useState } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

const Login = () => {
    // getting the input field values using useRef
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // react firebase hooks
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    // function to handle email password login
    const handleLogin = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    // sending the user to the previous page after logging in
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user || googleUser) {
        navigate(from, { replace: true });
    };

    // state and function to toggle password reset toast
    const [showToast, setShowToast] = useState(false);
    const toggleToast = () => {
        setShowToast(!showToast);
    };

    // function to send password reset email
    const handlePassReset = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toggleToast();
    };

    return (
        <div className='w-full md:w-4/5 mx-auto my-5'>
            <div>
                <h3 className='text-3xl font-semibold'>Login</h3>
                <form onSubmit={handleLogin}>
                    <input
                        ref={emailRef}
                        className='block w-4/5 lg:w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                        type="email"
                        name=""
                        placeholder='Email'
                        required />
                    <input
                        ref={passwordRef}
                        className='block w-4/5 lg:w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                        type="password"
                        name=""
                        placeholder='Password'
                        required />
                    <input
                        className='bg-orange-400 hover:bg-orange-500 text-xl w-4/5 lg:w-1/2 p-3 rounded-md'
                        type="submit"
                        value="Login" />
                    <p className='text-xl text-red-500 font-semibold my-3'>{error || googleError ? `${error?.message} ${googleError?.message}` : ''}</p>
                    <p className='text-xl my-3'>Forgot password? <span onClick={handlePassReset} className='text-orange-600 hover:text-orange-700 cursor-pointer font-semibold'>Get password reset email.</span></p>
                </form>
                <button
                    onClick={() => signInWithGoogle()}
                    className='bg-orange-400 hover:bg-orange-500 text-xl w-4/5 lg:w-1/2 p-3 rounded-md'>Continue with Google</button>
                <p className='text-xl my-3'>New to Guitar tutor? <Link className='text-orange-600 hover:text-orange-700 font-semibold' to='/register'>Create an Account!</Link></p>
            </div>
            <Toast className='text-right' show={showToast} onClose={toggleToast}>
                <Toast.Header>
                    <strong className="me-auto">Toast!</strong>
                </Toast.Header>
                <Toast.Body>Password reset Email sent! Please check your inbox!</Toast.Body>
                <small className='cursor-pointer' onClick={toggleToast}>Close Toast</small>
            </Toast>
        </div>
    );
};

export default Login;