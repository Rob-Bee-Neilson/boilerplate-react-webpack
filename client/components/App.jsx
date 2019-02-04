import React from 'react'

import Blogbox from './Blogbox'

import blogs from '../../server/public/blogs'





const App = () => {
  
  

  return (

    <div className='container'>
      <h1>Rob's Blog v1.0</h1>

      {console.log({
        blogs})}
      
      {blogs.map(blog => {
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

