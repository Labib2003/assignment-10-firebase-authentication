import React from 'react';

const Service = ({service}) => {
    const {img, name, desc, price} = service;
    return (
        <div className='flex border border-gray-300 p-3'>
            <div className='w-1/3 mr-5'>
                <img src={img} alt="" />
            </div>
            <div className='text-left w-4/5'>
                <h3 className='text-3xl font-semibold'>{name}</h3>
                <p className='text-xl my-3 leading-relaxed'>{desc}</p>
                <h2 className='text-2xl font-semibold'>${price}</h2>
            </div>
        </div>
    );
};

export default Service;