import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Example = () => {
  const [text, setText] = React.useState('');

  const handleClick = () => {
    setText('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
    console.log(`text: ${value}`);
  };

  return (
    <div>
      <h1>Change Text</h1>
      <div>
        <TextField name="example" label="text" value={text} onChange={handleChange} />
        <Button onClick={handleClick}>Clear</Button>
      </div>

      <br />

      <div>text: {text}</div>

      <div style={{ marginTop: 40 }}>
        <Link href="/example">back</Link>
      </div>
    </div>
  );
};

export default Example;
