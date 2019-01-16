import React from 'react';

const Image = props => (

  <img src={`/images/${props.image}`}
    alt={props.alt} className='pic-here' />

)

export default Image