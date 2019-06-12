import React from 'react';

import Header from './Header'
import Content from './Content'
import Image from './Image'

const Blogbox = props => {

  return(

    <div className='blog-wrapper'>

      <div className='blog-header'>
        <Header title={props.title} date={props.date} />
      </div><br></br>

      <div className='blog-content'>
        <Content content={props.content} />
      </div><br></br>

      <div className='blog-image'>
        <Image image={props.image} alt={props.alt} />
      </div><br></br>

    </div>

  )

}

export default Blogbox