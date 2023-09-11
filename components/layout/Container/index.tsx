import { FC } from 'react'
import React from 'react'
import cn from 'clsx'
interface ContainerProps {
  className?: string;
  children?: React.ReactNode
}
const Container:FC<ContainerProps> = ({children, className})=> {

  const rootclass = cn(
    '',
    className
  )

  return (
    <div className={rootclass}>{children}</div>
  )
}

export default Container