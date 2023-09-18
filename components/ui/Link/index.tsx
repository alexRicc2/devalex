import React from 'react'
import Link from 'next/link'
import cn from 'clsx'
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
  className?: string;
}

function CustomLink(
  { href,
    children,
    variant = 'filled',
    className
  }: CustomLinkProps) {

  const rootClass = cn(
    'p-2 rounded-lg border-2 font-medium transition-[0.3]',
    {
      ['border-white bg-white text-black hover:bg-transparent hover:text-white']: variant === 'filled',
      ['border-white hover:bg-white hover:text-black ']: variant === 'outline'
    },
    className
  )

  return (
    <Link href={href} className={rootClass}>
      {children}
    </Link>
  )
}

export default CustomLink