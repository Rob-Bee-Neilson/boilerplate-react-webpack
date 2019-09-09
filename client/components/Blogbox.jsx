import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header'
import Content from './Content'
import Image from './Image'
import { typography } from '@material-ui/system';

const Blogbox = props => {
  
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return(

    <div className='blog-wrapper'>

      {/* <div className='blog-header'>
        <Header title={props.title} date={props.date} />
      </div><br></br>

      <div className='blog-content'>
        <Content content={props.content} />
      </div><br></br>

      <div className='blog-image'>
      <Image image={props.image} alt={props.alt} />
      </div><br></br> */}

      <Card className={classes.card}>
      
        <CardContent>
          <Typography className={'x2'} color="textSecondary" gutterBottom>
            <Header title={props.title} date={props.date} />
          </Typography>
          <Typography>
            <Content content={props.content} />
          </Typography>
          <Typography>
            <Image image={props.image} alt={props.alt} />
          </Typography>
        </CardContent>
      </Card>

    </div>

  )

}

export default Blogbox