import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div className='w-4/5 mx-auto'>
            <h3 className='text-3xl font-semibold'>Please Login</h3>
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
                    className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 my-3 rounded-md'
                    type="submit"
                    value="Login" />
            </form>
            <button onClick={() => signInWithGoogle()} className='bg-orange-400 hover:bg-orange-500 text-xl w-1/2 p-3 rounded-md'>Continue with Google</button>
        </div>
    );
};

export default Login;