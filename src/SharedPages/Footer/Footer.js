import React from 'react';

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <div className='my-5'>
            <p>&copy; Labib Amir Salimi {year}</p>
        </div>
    );
};

export default Footer;