import React from 'react';
import Link from 'next/link';
import red from '@material-ui/core/colors/red';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  description: {
    fontSize: '1rem',
    color: red[800],
  },
  sub: {
    fontSize: '0.8rem',
    color: red[300],
  },
}));

const Example = () => {
  const classes = useStyles();

  // コンポーネントの要素に値をいれた場合
  const Title = ({ title }) => {
    return <div className={classes.title}>{title}</div>;
  };
  return (
    <div>
      <Title title="CSS Demo" />

      <div className={classes.description}>あいうえお</div>
      <div className={classes.sub}>かきくけこ</div>

      <div style={{ marginTop: 40 }}>
        <Link href="/example">back</Link>
      </div>
    </div>
  );
};

export default Example;
