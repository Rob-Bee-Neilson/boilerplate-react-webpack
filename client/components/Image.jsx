import React from 'react';

const Image = props => (

  <div className='boarder-image'>
    <img src={`${props.image}`} alt={`${props.alt}`} />
  </div>
  
)

export default Image