import React, { useState } from 'react'
import on from './img/on.svg'

function On() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
      setIsClick(true);
      setTimeout(()=>setIsClick(false),200)
  };

  return (
      <>
          <img
              src={on}
              onClick={handleClick}
              style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '30px', left:'230px'}}  alt="" />
      </>
  )
}

export default On