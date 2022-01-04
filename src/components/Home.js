import React from 'react';
import homeImage from '../assets/home-image.jpg';

const Home = () => {
  return (
    <main>
      <img
        className="absolute object-cover w-full h-full"
        src={homeImage}
        alt="my area of work"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-50 px-8">
        <h1 className="text-3xl text-teal-600  cursive leading-none lg:leading-snug home-name">
          Welcome. I'm Sujith.
        </h1>
      </section>
    </main>
  );
};

export default Home;
