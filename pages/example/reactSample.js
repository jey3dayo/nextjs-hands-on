import React from 'react';
import Link from 'next/link';

// コンポーネントの要素に値をいれた場合
const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

// childrenにはタグの中身が入る
const Description = ({ children }) => {
  return <div>`説明文: ${children}`</div>;
};

const Example = () => {
  const title = 'カスタムコンポーネントの説明';

  const data = [
    { id: 1, text: 'text1' },
    { id: 2, text: 'text2' },
    { id: 3, text: 'text3' },
  ];

  return (
    <div>
      <Title title="React Demo" />

      <Description>{title}</Description>

      <h2>MAP操作</h2>
      {data.map((v) => (
        <div key={v.id}>text: {v.text}</div>
      ))}

      <div style={{ marginTop: 40 }}>
        <Link href="/example">back</Link>
      </div>
    </div>
  );
};

export default Example;
