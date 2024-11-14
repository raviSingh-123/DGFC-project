import React from 'react'
import Logo1 from '../assets/globe.gif'
import Logo2 from '../assets/dgfc_logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-#0E5CAD'>
            <div className=' max-w-[1320px] mx-auto flex '>
                <div className='flex pl-[50px] cursor-pointer'>
                    <img className='w-[60px] h-[60px]' src={Logo1} alt='logo' />
                    <img className='w-[100px] h-[60px]' src={Logo2} alt="logo2" />
                </div>
                <div className='pl-[180px] pt-[12px] font-serif font-medium  cursor-pointer'>
                    <ul className='flex gap-10 font-bold'>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>HOME</NavLink>
                        </li> 
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>ABOUT US</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/service' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}> SERVICES</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/dgfcwarehouse' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>DGFC WAREHOUSE</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/training' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>TRAINING</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/event' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>EVENT</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-black"}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
