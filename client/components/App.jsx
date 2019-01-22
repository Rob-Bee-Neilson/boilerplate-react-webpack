import React from 'react'

import Blogbox from './Blogbox'


const testblog = [
  {
    title: 'Title one',
    date: '12/34/56',
    content: 'aah ahh aah',
    image: '/images/download.jpg'
  },
  {
    title: 'Title two point five',
    date: '78/90/12',
    content: 'blah blah blah',
    image: '/images/download.jpg'
  }
]



const App = () => {
  
  // showBlog(blog) {
  //   return (
  //     <Blogbox key={blog.title}
  //       title={blog.title}
  //       date={blog.date}
  //       content={blog.content}
  //       image={blog.image}
  //     />
  //   )
  // }

  return (

    <div className='container'>
      <h1>Rob's Blog v1.0</h1>
      
      {testblog.map(blog => {
        return  <Blogbox key={blog.title}
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

