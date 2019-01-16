import React from 'react';

import Header from './Header'
import Content from './Content'
import Image from './Image'

const Blogbox = props => {
  <div className='blogwrapper'>

    <Header title={props.title} date={props.date} />

    <div className='content'>
      <Content content={props.content} />
    </div>

    <div className='image'>
      <Image image={props.image} />
    </div>

  </div>
}

export default Blogbox