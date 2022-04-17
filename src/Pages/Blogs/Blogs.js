import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='w-4/5 mx-auto text-left grid grid-cols-1 gap-5'>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;