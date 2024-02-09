import React from 'react'

export default function FlexWrapper({children, className}) {
   
  return (
    <div className={'flex '+className}>{children}</div>
  )
}
