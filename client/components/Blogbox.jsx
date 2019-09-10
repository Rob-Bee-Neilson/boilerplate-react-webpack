import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from './Header'
import Content from './Content'
// import Image from './Image'


const Blogbox = props => {
  
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      
      maxWidth: 345,
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  
  return(

    // <div className='blog-wrapper'>

      <Grid container className={classes.root} spacing={2}>
        
        <Grid item xs={12}>
        
          <Grid container justify="center" direction="row" alignItems="center" spacing={spacing}>
            {[0].map(value => (
              <Grid key={value} item>
                <Card className={classes.card}>
                  <CardActionArea>
                    
                    <CardContent>
                      
                      <Typography className={'x2'} color="textSecondary" gutterBottom>
                        <Header title={props.title} date={props.date} />
                      </Typography>
                      
                      <Typography>
                        <Content content={props.content} />
                      </Typography>

                      <CardMedia
                        component="img"
                        image={`${props.image}`}
                        title={`${props.title}`}
                        alt={`${props.alt}`}
                        height="100%"              
                      />
                    </CardContent>

                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Grid>
        
      </Grid>

    // </div>

  )

}

export default Blogbox