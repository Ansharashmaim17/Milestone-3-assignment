import React from 'react';

export default function AuthorCard() {
  return (
    <div className= "bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className= "flex items-center animation-fadeIn">


<img 
className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
src="../images/me.jpg"
alt="Author Image"
/>

<div>
<h3 className='text-xl font-bold'> Anshara Shamim </h3>
<p className='text-slate-500'>
  {" "}
  Graphic Designer | Web Developer {" "}
  </p>
</div>
      </div>



<p className='mt-4 text-black leading-relaxed'>
Anshara Shamim is a creative graphic Designer which transforms ideas into visual art, blending creativity with functionality. With an eye for detail and a passion for aesthetics, they craft designs that communicate messages effectively. Their work spans branding, web design, and digital art, always striving to evoke emotions and inspire action.
</p>

<div className='mt-4 flex space-x-3'>
  <a 
  href='#'
  className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-red-700 transition duration-300'>
    Twitter
  </a>

  <a 
  href='#'
  className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-red-700 transition duration-300'>
    Linkedin
  </a>

  <a 
  href='#'
  className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-red-700 transition duration-300'>
    Github
  </a>

</div>
    </div>
  );
}
