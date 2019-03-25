import React from 'react';

import Header from './Header'
import Content from './Content'
import Image from './Image'

const Blogbox = props => {

  return(

    <div className='blogwrapper'>

      <div className='header'>
        <Header title={props.title} date={props.date} />
      </div>

      <div className='content'>
        <Content content={props.content} />
      </div>

      <div className='image'>
        <Image image={props.image} alt={props.alt} />
      </div>

    </div>

  )

}

export default Blogbox