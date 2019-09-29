import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import blogs from '../../server/public/blogs';

import Headermain from './Headermain';
import Blogbox from './Blogbox';
import Filterbox from './Filterbox';
import Catpic from './Catpic';
import Geekbutton from './Geekbutton';
import Welcome from './Welcome';


class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        keyword: 'default'
      }

    this.updateState = this.updateState.bind(this);
    this.sortBlogs = this.sortBlogs.bind(this);
    this.showBlogs = this.showBlogs.bind(this);
    this.checkKeyword = this.checkKeyword.bind(this)

  }

  //display blogs from newest to oldest
  sortBlogs() {
  
    let arr= blogs.reverse();
    return arr
    
  }

  //update the state from filterbox
  updateState(props) {

    this.setState({keyword: props.keyword})
        
  }

  //test for props.keyword matching blogs objects.keyword
  checkKeyword(arr, search) {
    
    let found = false
    const propsKey = Object.keys(search)[0]
        
    arr.forEach(function(item){
      const itemKey = Object.keys(item)[1]
      
      if (itemKey === propsKey && item[itemKey] === search[propsKey]) 
      {
        found = true;
      }
      console.log('Keyword matches', found)
      
    })

    return found

  }

  //return blogs with keyword match
  showBlogs() {
    
    return(
      this.sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === this.state.keyword).map(blog => {
        return  <Blogbox key={blog.title}
        keyword={blog.keyword}
        title={blog.title}
        date={blog.date}
        content={blog.content}
        image={blog.image}
        alt={blog.alt}
        />;
      })
    )
    
  }

  
  render() {
    
    return (

      <div className='container' style={{ width: '100%' }}>
        
        <Headermain />

        <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        
          <Geekbutton />
          
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        
          <Welcome />
          
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        
          <Grid container direction="column" justify="center" alignItems="center">

            <Filterbox updateState={this.updateState} />
            {this.checkKeyword(blogs, this.state) ? this.showBlogs() : <Catpic />}
          
          </Grid>

        </Box>
                                    
      </div>

    )
  }
  
}

export default App