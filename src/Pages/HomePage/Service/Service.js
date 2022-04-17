import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, desc, price } = service;
    return (
        <div className='flex flex-col md:flex-row border border-gray-300 p-3 rounded-md'>
            <div className='md:w-1/3 md:mr-5'>
                <img className='rounded-md w-full mx-auto md:mx-0 ' src={img} alt="" />
            </div>
            <div className='text-left w-4/5'>
                <h3 className='text-3xl font-semibold'>{name}</h3>
                <p className='text-xl my-3 leading-relaxed'>{desc}</p>
                <div className='flex w-full justify-between'>
                    <h2 className='text-2xl font-semibold h-full my-auto'>${price}</h2>
                    <Link to='/checkout' className='text-xl text-orange-500 hover:text-orange-600 font-semibold underline px-3 py-1 rounded-md'>Book this!</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;