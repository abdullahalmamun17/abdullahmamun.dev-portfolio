import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogsData = [
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        }
    ]
    return (
        <section className="my-5 ">
            <div className="container">
                <h1 className="text-center my-5">Blogs</h1>
                <div className="row">
                    {
                        blogsData.map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;