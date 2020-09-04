import React from 'react';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';

const Example = () => {
  let text = 'text';

  const handleChange = e => {
    text = e.target.value;
    console.log(`text: ${text}`);
  };

  return (
    <div>
      <h1>Change Text</h1>
      <TextField name="example" label="text" value={text} onChange={handleChange} />

      <br />

      <div>text: {text}</div>

      <div style={{ marginTop: 40 }}>
        <Link href="/example">back</Link>
      </div>
    </div>
  );
};

export default Example;
