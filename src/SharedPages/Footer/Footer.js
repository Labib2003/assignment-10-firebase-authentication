import React from 'react';

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <footer className='my-5 bg-orange-400 p-5 mb-0'>
            <p>&copy; Labib Amir Salimi {year}</p>
        </footer>
    );
};

export default Footer;