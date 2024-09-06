import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div>
       <Link href="/">Go To home Page</Link>
        
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/faizan ai.jfif" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      I am a dedicated social media marketer, is excited to enhance his skills by joining a cutting-edge generative AI
      course conducted by Sir Asif. With a strong foundation in digital marketing, Faizan aims to leverage the power
      of Gernative AI to create innovative content and strategies that drive engagement and growth across social media platforms. 
      This course represents a pivotal step in his journey to stay at the forefront of technological advancements, ensuring 
      that his marketing campaigns are not only effective but also ahead of the curve.  
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