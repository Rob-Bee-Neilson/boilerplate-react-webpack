import React from 'react';

const Header = props => (

  <div className='boarder'>
    <span className='main-header'>{props.title}</span>
    <span className='date'>{props.date}</span>
  </div>

)

export default Header