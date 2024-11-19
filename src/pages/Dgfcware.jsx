import React from 'react'
import warehouse1 from '../assets/warehouse1.jpg'
import warehouse2 from '../assets/warehouse2.jpg'

function Dgfcware() {
  return (
    <div>
      <div className='md:flex md:flex-2 hover:'>
        <div className='px-6 py-6 group'>
          <img className='rounded-lg' src={warehouse1} alt="warehouse1" />
          <h1 className='lg:group-hover:block hidden text-white text-[40px] absolute top-[230px] left-[220px] font-bold group-hover:bg-black group-hover:rounded-xl p-8 font-sans duration-200'>WAREHOUSE 1</h1>
        </div>
        <div className='px-6 py-6 group'>
          <img className='rounded-lg' src={warehouse2} alt="warehouse2" />
          <h1 className='lg:group-hover:block hidden text-white text-[40px] absolute top-[230px] right-[220px] font-bold group-hover:bg-black group-hover:rounded-xl p-8 font-sans duration-200'>WAREHOUSE 2</h1>
        </div>
      </div>
    </div>
  )
}

export default Dgfcware
