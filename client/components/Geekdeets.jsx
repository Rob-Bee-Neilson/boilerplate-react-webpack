import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: 'yellow',
  },
}));

export default function Geekdeets() {
  const classes = useStyles();

  return (

    <div className='boarder-geek'>
      
      <Paper className={classes.root}>

        <Typography variant="h5" component="h5">
          This blog is:
        </Typography>

        <Typography component="p">
          v1.0:  React JS  (MVP - get it up and running!)
        </Typography>
        <br></br>

        <Typography component="p">
          Dependencies:
        </Typography>

        <Typography component="ul">
          <ul>
            <li>babel-core: 6.26.0</li>
            <li>babel-loader: 7.1.2</li>
            <li>babel-plugin-transform-class-properties: 6.24.1</li>
            <li>babel-preset-env: 1.6.1</li>
            <li>babel-preset-react: 6.24.1</li>
            <li>enzyme: 3.3.0</li>
            <li>enzyme-adapter-react-16: 1.1.1</li>
            <li>express: 4.16.2</li>
            <li>jest: 22.1.4</li>
            <li>material-ui/core: 4.4.0</li>
            <li>material-ui/icons: 4.2.1</li>
            <li>react: 16.2.0</li>
            <li>react-dom: 16.2.0</li>
            <li>webpack: 3.10.0</li>
            <li>webpack-dev-server: 2.11.1</li>
          </ul>
          
        </Typography>
        <br></br>

        <Typography component="p">
          Deployed on Heroku.
        </Typography>

      </Paper>

    </div>
  
);
}