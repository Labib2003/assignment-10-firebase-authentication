import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    // getting data from the public folder and setting them in a state
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-5'>
            <h3 className='text-3xl font-semibold my-3'>Customer Reviews</h3>
            <div className='w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;