import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function Catpic() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (

    <div className='fillerimage'>
      <p>Try a valid keyword...</p><br></br>
      <Grid container className={classes.root} justify="center" direction="row" alignItems="center" spacing={spacing}>
      <img src='images/cat.jpg' alt="Default" />
      </Grid>
      
    </div>

  )
  
}

export default Catpic;