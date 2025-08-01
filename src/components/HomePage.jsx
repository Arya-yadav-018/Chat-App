import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

export const HomePage = () => {
  return (
    <div className='flex sm:h-[450x] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     <Sidebar/>
     <MessageContainer/>

    </div>
  )
}

export default HomePage