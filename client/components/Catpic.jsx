import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Catpic() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    card: {
      maxWidth: 345,
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (

    <div className='fillerimage'>

      <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        
        <Card className={classes.card}>
        
          <CardActionArea>
            
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Try a valid keyword...
              </Typography>
            </CardContent>
            
            <CardMedia
              component="img"
              alt="Confused cat"
              // height="140"
              width="100%"
              image="images/cat.jpg"
              title="Cat"
            />
        
          </CardActionArea>
     
        </Card>
      
      </Box>
      
    </div>

  )
  
}

export default Catpic;