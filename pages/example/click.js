import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  alert('clicked');
};

const Example = () => {
  return (
    <div>
      <h1>Handle Click</h1>
      <Button onClick={handleClick}>Click me</Button>
      <div>
        <Link href="/example">back</Link>
      </div>
    </div>
  );
};

export default Example;
