import React from 'react'

import blogs from '../../server/public/blogs';

import Blogbox from './Blogbox';
import Filterbox from './Filterbox';
import Catpic from './Catpic';
import Geekbutton from './Geekbutton';


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

  //new function to display holder image or blogs (after keyword submit) here
  render() {
    
    return (

      <div className='container'>

        <h1>Rob's Blog v1.0</h1><br></br>
        <h3>(v1.0 = get something up and working)</h3><br></br>
        {<Geekbutton />}
        <p>Welcome to Rob's Blog v1.0, to read some blog posts enter a keyword below...<br></br></p>
        <Filterbox updateState={this.updateState}/>
        {this.checkKeyword(blogs, this.state) ? this.showBlogs() : <Catpic />}
                                      
      </div>

    )
  }
  
}

export default App