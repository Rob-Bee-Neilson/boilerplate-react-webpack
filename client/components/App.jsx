import React from 'react'

import Blogbox from './Blogbox'


const testblog = [
  {
    title: 'Title one',
    date: '12/34/56',
    content: 'aah ahh aah',
    image: 'img1'
  },
  {
    title: 'Title two',
    date: '78/90/12',
    content: 'blah blah blah',
    image: 'img2'
  }
]

function showBlog(testblog) {
  return (
    <Blogbox key={testblog.title}
      title={testblog.title}
      date={testblog.date}
      content={testblog.content}
      image={testblog.image}
    />
  )
}

const App = () => {
  return (

    <div classname='container'>
      <h1>Rob's Blog v1.0</h1>
      <Blogbox />
      {testblog.map(showBlog)}
    </div>
  )
}

export default App

