import React from 'react';

import blogs from '../../server/public/blogs'

import Blogbox from './Blogbox'

const Blogrender = props => {

    sortBlogs() {
  
        let arr= blogs.reverse();
        return arr
        
    };

  return(
  <div className='blogswrapper'>

    

  </div>
  )
}

export default Blogrender