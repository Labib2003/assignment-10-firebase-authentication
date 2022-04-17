import React from 'react';

const Review = ({review}) => {
    const {reviewText, name} = review;
    return (
        <div className='text-left border border-gray-300 rounded-md p-3'>
            <p className='text-xl leading-relaxed'>{reviewText}</p>
            <p>-{name}</p>
        </div>
    );
};

export default Review;