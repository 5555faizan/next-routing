import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
<div className='flex'>
    <Link href="\">Home Page</Link>
    <Link href="\">About Page</Link>
    <Link href="\">Adress Page</Link>
    <Link href="\">Contact Page</Link>
</div>


  )
}

export default Header