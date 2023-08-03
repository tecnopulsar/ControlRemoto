import React, { useState } from 'react'
import list from './img/list.svg'

function List() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
      setIsClick(true);
      setTimeout(()=>setIsClick(false),200)
  };

  return (
      <>
          <img
              src={list}
              onClick={handleClick}
              style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '115px', left:'154px'}}  alt="" />
      </>
  )
}

export default List