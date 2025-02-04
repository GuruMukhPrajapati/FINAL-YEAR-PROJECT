import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">Welcome to our website! This is the about page.</p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to create a dynamic and innovative platform that showcases our skills and knowledge in web development. We strive to deliver a user-friendly experience while pushing the boundaries of our technical abilities.
            </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="text-lg mb-4">
            This project is both a self-development initiative and a college examination project. Our team consists of passionate students dedicated to honing their skills in React and modern web technologies. We're committed to learning, growing, and delivering excellence through this project.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-lg mb-4">
             each other on social media. Follow us on Twitter, LinkedIn, and GitHub to stay updated on our project progress and to engage in discussions about web development and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;