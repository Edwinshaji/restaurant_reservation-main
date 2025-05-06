import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-[2rem] bg-black text-white'>
        <div>
          <h1 className='font-blod text-2x1'>My App</h1>
        </div>
        <div>
          <ul className='flex justify-between gap-8'>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>HOME</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>RESERVATIONS</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>MENU</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
