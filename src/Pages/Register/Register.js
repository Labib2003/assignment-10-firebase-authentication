import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const [errorMessage, setErrorMessage] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({displayName: name});
        }
        else {
            setErrorMessage("Password did not match");
            console.log('pass err');
        }
    };

    if(user){
        navigate('/');
        console.log(user);
    };

    return (
        <div className='w-4/5 mx-auto my-5'>
            <h3 className='text-3xl font-semibold'>Create New Account</h3>
            <form onSubmit={handleRegister}>
                <input
                    ref={nameRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="text"
                    placeholder='Name'
                    required />
                <input
                    ref={emailRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="email"
                    placeholder='Email'
                    required />
                <input
                    ref={passwordRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="password"
                    placeholder='Password'
                    required />
                <input
                    ref={confirmPasswordRef}
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="password"
                    placeholder='Confirm Password'
                    required />
                <p className='text-xl font-semibold text-red-500 my-3'>{errorMessage}</p>
                <input
                    className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 rounded-md'
                    type="submit"
                    value="Register" />
            </form>
            <p className='text-xl my-3'>Already have an account? <Link className='text-orange-400 hover:text-orange-600 font-semibold' to='/login'>Login!</Link></p>
        </div>
    );
};

export default Register;