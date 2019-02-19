import React from 'react'

import blogs from '../../server/public/blogs'

import Blogbox from './Blogbox'
import Filterbox from './Filterbox';


// App to take props?
const App = (props) => {
  const update = props

 //create filterBlogs function here
 function filterBlogs(update) {
   console.log(update)
   
 } 

 function sortBlogs() {
  
    let arr= blogs.reverse();
    
    return arr
  }

  return (
    <div className='container'>
      <h1>Rob's Blog v1.0</h1>
      <p>wazzup<br></br></p>
      <Filterbox keyword={update.keyword}/>

      {filterBlogs()}         
      {sortBlogs().map(blog => {
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

export default App

