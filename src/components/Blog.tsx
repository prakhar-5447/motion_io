import React from 'react';
import './Blog.sass';
import figma from "/assets/figma.jpeg";
import html from "/assets/html.jpeg";
import motion from "/assets/motion.jpeg";
import art from "/assets/art.jpeg";
import vector from "/assets/vector.jpeg";
import pendulum from "/assets/pendulum.jpeg";

const Blog: React.FC = () => {
    const blogPosts = [
        {
            title: 'The Future of Web Design',
            date: 'August 20, 2024',
            author: 'Jane Doe',
            image: figma,
        },
        {
            title: 'Mastering Motion Graphics',
            date: 'July 15, 2024',
            author: 'John Smith',
            image: html,

        },
        {
            title: 'The Power of Vector Art',
            date: 'June 30, 2024',
            author: 'Alice Brown',
            image: motion,

        },
        {
            title: 'Interactive Animations in Web Design',
            date: 'June 10, 2024',
            author: 'Michael Lee',
            image: art,

        },
        {
            title: 'Art of Silence',
            date: 'Dec 12, 2024',
            author: 'Alice Brown',
            image: vector,

        },
        {
            title: 'Interactive Animations in Web Design',
            date: 'Mar 07, 2024',
            author: 'Michael Lee',
            image: pendulum,
        },
    ];

    return (
        <section className="blog">
            <h2>Latest <span>Blog Posts</span></h2>
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <div className="blog-post" key={index}>
                        <img src={post.image} alt={post.title} />
                        <div className="post-content">
                            <h3>{post.title}</h3>
                            <p className="meta">By {post.author} on {post.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
