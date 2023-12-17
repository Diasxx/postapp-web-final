import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About Us</h2>
            <p >Welcome to our post app! This is a platform where you can share and explore interesting posts from various users.</p>
            <p>Feel free to connect with the community and share your thoughts and experiences.</p>
            <p >Our Mission:</p>
            <p>At PostApp, we are dedicated to fostering a vibrant and inclusive community where users can express themselves freely and engage in meaningful conversations. Our mission is to provide a platform that empowers individuals to share their stories, ideas, and perspectives with the world.</p>
            <p >Key Features:</p>
            <ul className="about-list">
                <li>Post and Share: Create engaging posts and share them with the community.</li>
                <li>Explore: Discover a diverse range of posts from users around the globe.</li>
                <li>Connect: Interact with fellow users, like, comment, and build connections.</li>
                <li>Community Guidelines: We prioritize a positive and respectful environment. Please review our community guidelines to ensure a pleasant experience for everyone.</li>
            </ul>
            <p >Get Started:</p>
            <p >Join PostApp today and start your journey of exploration, expression, and connection. Whether you're a seasoned user or a newcomer, there's always something new to discover in our vibrant community.</p>
        </div>
    );
};

export default About;
