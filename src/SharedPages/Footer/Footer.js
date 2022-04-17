import React from 'react';

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <div>
            <p>&copy; Labib Amir Salimi {year}</p>
        </div>
    );
};

export default Footer;