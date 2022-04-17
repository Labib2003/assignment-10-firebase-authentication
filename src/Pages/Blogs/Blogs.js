import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[])
    return (
        <div>
            {
                blogs.map(blog => <p>{blog.Q}</p>)
            }
        </div>
    );
};

export default Blogs;