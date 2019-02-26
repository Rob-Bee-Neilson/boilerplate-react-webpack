import React from 'react'

import blogs from '../../server/public/blogs'

import Blogbox from './Blogbox';
import Filterbox from './Filterbox';



class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
          keyword: 'default'
      }

    //this.Blogbox = this.Blogbox.bind(this)
    this.filterBlogs = this.filterBlogs.bind(this)
    this.sortBlogs = this.sortBlogs.bind(this)

  }


  sortBlogs() {
  
    let arr= blogs.reverse();
    return arr
    
  }

  //create filterBlogs function here
  filterBlogs(props) {
    let update = props
    //console.log('filterBlogs says ', update.keyword)
    let selectList = this.sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === update.keyword)
    console.log(selectList)
    return selectList
    //console.log('to print ', sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === update.keyword))
  }

  //new function to display holder image or blogs (after keyword submit) here
  render() {
    return (
      <div className='container'>
        <h1>Rob's Blog v1.0</h1>
        <p>wazzup<br></br></p>
        <Filterbox filterBlogs={this.filterBlogs}/>

        {this.sortBlogs().map(blog => {
          return  <Blogbox key={blog.title}
          keyword={blog.keyword}
          title={blog.title}
          date={blog.date}
          content={blog.content}
          image={blog.image}
        />;
        })}
        
      </div>
    )
  }
}

export default App