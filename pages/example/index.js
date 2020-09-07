import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Example = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Awesome App
          </Typography>
          <Button color="inherit">Hello!</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <div>
          <h2>Example</h2>
          <ul>
            <li>
              <Link href="/example/reactSample">React sample</Link>
            </li>
            <li>
              <Link href="/example/cssSample">CSS sample</Link>
            </li>
            <li>
              <Link href="/example/click">handle click</Link>
            </li>
            <li>
              <Link href="/example/input">handle input</Link>
            </li>
            <li>
              <Link href="/example/localStorage">localStorage</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Example;
