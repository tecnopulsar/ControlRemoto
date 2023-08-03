import React, { useState } from 'react'
import active from './img/active.svg'

function Active() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
      setIsClick(true);
      setTimeout(()=>setIsClick(false),200)
  };

  return (
      <>
          <img
              src={active}
              onClick={handleClick}
              style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '115px', left:'76px'}}  alt="" />
      </>
  )
}

export default Active