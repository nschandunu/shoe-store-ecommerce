import React from 'react'
import Title from './Title'
import { blogs } from '../assets/data'

const Blog = () => {
  return (
    <section className='max-padd-container py-16'>
      <Title 
        title1={'Our Expert'} 
        title2={'Blog'}
        titleStyles={'pb-10'} 
        paraStyles={'!block'} 
      />
      {/* Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {blogs.map((blog) => (
          <div 
            key={blog.title} 
            className='rounded-3xl border-[11px] border-primary overflow-hidden relative'
          >
            <img src={blog.image} alt="blogImg" />
            {/* Overlay */}
            <div className='absolute top-0 left-0 h-full w-full bg-black/25' />
            {/* Info */}
            <div className='absolute bottom-4 left-4 text-white text-[15px]'>
              <h3 className='font-[600] text-[16px] pr-4 leading-5'>
                {blog.title}
              </h3>
              <h4 className='medium-14 pb-3 pt-1'>
                {blog.category}
              </h4>
              <button className='btn-light !px-3 !py-0'>
                continue reading
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog;
