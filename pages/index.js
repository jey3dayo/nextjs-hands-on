import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <Link href="/about">about</Link>
    </div>
  );
};

export default Home;
