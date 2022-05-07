import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    // checking for user
    const [user] = useAuthState(auth);

    // function to sign out the user
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-orange-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/home"
                        >
                            Guitar Tutor
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xl uppercase font-semibold leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xl uppercase font-semibold leading-snug text-white hover:opacity-75"
                                    to="/blogs"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xl uppercase font-semibold leading-snug text-white hover:opacity-75"
                                    to="/about"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user ?
                                        <p onClick={handleSignOut} className='px-3 py-2 flex items-center text-xl uppercase font-semibold leading-snug text-white hover:opacity-75 cursor-pointer'>Sign Out</p>
                                        :
                                        <Link className="px-3 py-2 flex items-center text-xl uppercase font-semibold leading-snug text-white hover:opacity-75 cursor-pointer" to='/login'>Login/Register</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}