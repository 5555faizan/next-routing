import React from 'react' 
import Link from 'next/link'

const Header = () => {
  return (
<div className='flex'>
    <Link href="/about">Go To Page</Link>
    <Link href="/">about</Link>
    <Link href="/">adress</Link>
    <Link href="/">contact</Link>
</div>


  )
}

export default Header