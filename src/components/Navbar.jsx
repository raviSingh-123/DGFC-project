import React, { useState } from 'react'
import Logo1 from '../assets/globe.gif'
import Logo2 from '../assets/dgfc_logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";


function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-20 h-16 bg-orange-500'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img className='w-[60px] h-[60px]' src={Logo1} alt='logo' />
                        <img className='w-[100px] h-[60px]' src={Logo2} alt="logo2" />
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8 font-bold'>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>HOME</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>ABOUT US</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/service' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}> SERVICES</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/dgfcwarehouse' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>DGFC WAREHOUSE</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/training' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>TRAINING</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/event' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>EVENT</NavLink>
                            </li>
                            <li className='hover:text-yellow-300 hover:underline'>
                                <NavLink to='/contact' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>CONTACT</NavLink>
                            </li>
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'> {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {menu && (<div className='bg-white w-full absolute top-[64px] left-0 z-50'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-[20px] font-bold'>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>HOME</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/about' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>ABOUT US</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/service' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}> SERVICES</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/dgfcwarehouse' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>DGFC WAREHOUSE</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/training' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>TRAINING</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/event' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>EVENT</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/contact' onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? "text-red-600 underline" : "text-black"}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>)}

            </div>
        </div>
    )
}

export default Navbar

