import React, { useState } from 'react'
import guide from './img/guide.svg'

function Guide() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
      setIsClick(true);
      setTimeout(()=>setIsClick(false),200)
  };

  return (
      <>
          <img
              src={guide}
              onClick={handleClick}
              style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '151px', left:'20px'}}  alt="" />
      </>
  )
}

export default Guide