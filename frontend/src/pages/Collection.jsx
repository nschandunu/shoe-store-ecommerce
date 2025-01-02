import React from 'react'
import ShowSearch from '../components/ShowSearch'

const collection = () => {
  return (
    <div className='max-padd-container !px-0'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16'>
        {/* Filter options   */}
        <div className='min-w-72 bg-primary p-4 pt-8 pl-6 lg:pl-12 rounded-r-xl'>
          < ShowSearch />
          <div>
            <h5>Categories</h5>
            <div>
              {["Men", "Women", "Kids"].map((cat) => (
                <label htmlFor=""></label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default collection
