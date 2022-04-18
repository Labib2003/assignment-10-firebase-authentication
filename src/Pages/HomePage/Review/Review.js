import React from 'react';

const Review = ({review}) => {
    const {rating, reviewText, name} = review;
    return (
        <div className='text-left border border-gray-300 rounded-md p-3'>
            <h3 className='text-3xl font-semibold'>{rating}</h3>
            <p className='text-xl leading-relaxed my-3'>{reviewText}</p>
            <p>-{name}</p>
        </div>
    );
};

export default Review;