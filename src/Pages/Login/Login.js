import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
``

    return (
        <div className='w-4/5 mx-auto my-5'>
            <h3 className='text-3xl font-semibold'>Login</h3>
            <form>
                <input
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="email"
                    name=""
                    placeholder='Email'
                    required />
                <input
                    className='block w-1/2 mx-auto text-xl p-3 border border-gray-400 my-3 rounded-md'
                    type="password"
                    name=""
                    placeholder='Password'
                    required />
                <input
                    className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 rounded-md'
                    type="submit"
                    value="Login" />
            </form>
            <button 
            onClick={() => signInWithGoogle()} 
            className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 my-3 p-3 rounded-md'>Continue with Google</button>
            <p className='text-xl'>New to Guitar tutor? <Link className='text-orange-400 hover:text-orange-600 font-semibold' to='/register'>Create an Account!</Link></p>
        </div>
    );
};

export default Login;