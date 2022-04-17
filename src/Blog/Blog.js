import React from 'react';

const Blog = ({blog}) => {
    const {Q, ans} = blog;
    return (
        <div>
            <h3 className='text-3xl font-semibold my-3'>{Q}</h3>
            <p className='text-xl leading-relaxed'>{ans}</p>
        </div>
    );
};

export default Blog;