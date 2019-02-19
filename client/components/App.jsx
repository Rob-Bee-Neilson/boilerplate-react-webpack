import React from 'react'

import blogs from '../../server/public/blogs'

import Blogbox from './Blogbox'
import Filterbox from './Filterbox';


// App to take props?
const App = () => {
  // const update = props
  // console.log('getting props as ', update)

 //create filterBlogs function here
  function filterBlogs(props) {
    let update = props
    //console.log('filterBlogs says ', update.keyword)
    let selectList = sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === update.keyword)
    console.log(selectList)
    return selectList
    //console.log('to print ', sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === update.keyword))
  }

 function sortBlogs() {
  
    let arr= blogs.reverse();
    
    return arr
  }

  return (
    <div className='container'>
      <h1>Rob's Blog v1.0</h1>
      <p>wazzup<br></br></p>
      <Filterbox filterBlogs={filterBlogs}/>

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

