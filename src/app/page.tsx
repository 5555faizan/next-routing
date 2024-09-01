import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div>Home Page
    
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/home.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Faizan Nawaz
      </div>
      <div className="text-slate-700 dark:text-slate-500">
      </div>
    </figcaption>
  </div>
</figure>  
    </div>
  )
}

export default page;