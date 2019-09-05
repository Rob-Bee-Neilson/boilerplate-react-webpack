import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Header from './Header'
import Content from './Content'
import Image from './Image'

const Blogbox = props => {
  
  return(

    <div className='blog-wrapper'>

      <div className='blog-header'>
        <Header title={props.title} date={props.date} />
      </div><br></br>

      <div className='blog-content'>
        <Content content={props.content} />
      </div><br></br>

      <div className='blog-image'>
        <Image image={props.image} alt={props.alt} />
      </div><br></br>

      <Card className={'x1'}>
      <CardContent>
        <Typography className={'x2'} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        {/* <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>

  )

}

export default Blogbox