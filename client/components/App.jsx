import React from 'react'

import blogs from '../../server/public/blogs';


import Blogbox from './Blogbox';
import Filterbox from './Filterbox';
import Catpic from './Catpic';



class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        keyword: 'default'
      }

    //this.Blogbox = this.Blogbox.bind(this)
    this.updateState = this.updateState.bind(this);
    this.sortBlogs = this.sortBlogs.bind(this);
    this.showBlogs = this.showBlogs.bind(this);
    this.checkKeyword = this.checkKeyword.bind(this)

  }


  sortBlogs() {
  
    let arr= blogs.reverse();
    return arr
    
  }

  //update the state from filterbox
  updateState(props) {

    // let update = props;
    // let dflt = {keyword: 'default'};
    // (update.keyword == blogs.object.keyword) ? this.setState({keyword: update.keyword}) : this.setState(dflt)
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

  //new state renders this
  showBlogs() {
    
    return(
    this.sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === this.state.keyword).map(blog => {
              return  <Blogbox key={blog.title}
              keyword={blog.keyword}
              title={blog.title}
              date={blog.date}
              content={blog.content}
              image={blog.image}
              />;
            })
    )
    // if (this.checkKeyword(blogs, this.state) == true)
    //   {
    //     console.log('checkKeyword sez true')
    //     return(
        
    //       this.sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === this.state.keyword).map(blog => {
    //         return  <Blogbox key={blog.title}
    //         keyword={blog.keyword}
    //         title={blog.title}
    //         date={blog.date}
    //         content={blog.content}
    //         image={blog.image}
    //         />;
    //       })

    //     )
    //   }
    // else
    //     {
    //       return(
    //         <div>
    //           <Catpic />
    //         </div>
    //       )
    //     }

  }

  //new function to display holder image or blogs (after keyword submit) here
  render() {



    return (
      <div className='container'>
        <h1>Rob's Blog v1.0</h1>
        <p>wazzup<br></br></p>
        <Filterbox updateState={this.updateState}/>

        {/* {this.state.keyword === 'default' && <Catpic />} */}
        {/* {this.state.keyword !== 'default' && this.showBlogs()} */}
        {this.checkKeyword(blogs, this.state) ? this.showBlogs() : <Catpic />}
        {/* {this.checkKeyword(blogs, this.state) ? console.log('A') : console.log('B')} */}
        {console.log(this.showBlogs())}
        
                
      </div>
    )
  }
}

export default App