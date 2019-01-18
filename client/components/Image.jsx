import React from 'react';

const Image = props => (

  // <img src={`${props.image}`}
  <img src={require(`${props.image}`)} />
    // alt={props.alt} className='pic-here' 
    />

)

export default Image