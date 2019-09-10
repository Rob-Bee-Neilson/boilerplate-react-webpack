import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            Welcome to Rob's Blog v1.0
        </Typography>
        <Typography component="p">
            To read some blog posts enter a keyword below...<br></br><br></br>
            Sample Keywords:
        </Typography>
        <Typography>
            - public<br></br>
            - robbie<br></br>
            - dev<br></br>
            - art
        </Typography>
      </Paper>
    </div>
  );
}