import React, { useState } from 'react'
import exit from './img/exit.svg'

function Exit() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
      setIsClick(true);
      setTimeout(()=>setIsClick(false),200)
  };

  return (
      <>
          <img
              src={exit}
              onClick={handleClick}
              style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '151px', left:'214px'}}  alt="" />
      </>
  )
}

export default Exit