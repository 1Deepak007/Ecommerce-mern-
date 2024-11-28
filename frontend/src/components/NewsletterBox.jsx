import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();           //stop reloading      
    
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>
            Subscribe now & get latest news and offers
        </p>
        <p className="text-gray-400 mt-3">
          Stay up-to-date with our latest news, offers, and product releases.
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3' action="">
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='youremail@gmail.com' required/>
          <button type='submit' className='bg-black text-white md:text-sm text-xs  px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox