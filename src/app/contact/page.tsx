import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
    <div><Link href="/">Go To home Page</Link> 
        
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/faizan ai.jfif" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-sky-500 dark:text-sky-400">
       Faizan Nawaz
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-lg-500 dark:text-lg-400">
        +923006700322
      </div>
      <div className="text-lg-700 dark:text-lg-500">
        faizannawaz3085@gmail.com
      </div>
    </figcaption>
  </div>
</figure>
    </div>
    </div>
  )
}

export default page;