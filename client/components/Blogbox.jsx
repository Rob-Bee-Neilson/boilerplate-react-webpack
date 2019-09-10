import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

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
      // margin: 20,
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

  function handleChange(event) {
    setSpacing(Number(event.target.value));
  }
  
  return(

    <div className='blog-wrapper'>

      {/* <Card className={classes.card}>
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
      </Card> */}

      <Grid container className={classes.root} spacing={10} direction="row">
        
        <Grid item xs={12}>
        
          <Grid container justify="center" spacing={spacing}>
            {[0].map(value => (
              // <Grid key={value} item>
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
              // </Grid>
            ))}
          </Grid>

          
        
        </Grid>
        
        {/* <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>

    </div>

  )

}

export default Blogbox