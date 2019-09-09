import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Header from './Header'
import Content from './Content'
// import Image from './Image'
import { typography } from '@material-ui/system';

const Blogbox = props => {
  
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  
  return(

    <div className='blog-wrapper'>

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

    </div>

  )

}

export default Blogbox