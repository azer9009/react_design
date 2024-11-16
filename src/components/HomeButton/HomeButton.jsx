import React from 'react'
import '../HomeButton/HomeButton.style.css'
import cn from 'clsx'
const HomeButton = ({
    children,type
}) => {
  return (
    <button className={cn('homeBtn', {
      [`btn-${type}`]:!!type,
    })}>
      {children}
    </button>
  )
}

export default HomeButton
