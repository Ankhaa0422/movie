'use client'
import { Transition } from '@/components'
import React from 'react'
import bg from '../../../../public/images/login-bg.jpg'
const Page = () => {
    return <Transition direction='left' className='relative w-screen h-screen flex justify-center items-center overflow-hidden'>
        <div className='w-screen h-screen' style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'fixed', backgroundSize: 'cover' }}/>
        <div className='absolute left-0 top-0 z-10 bg-black bg-opacity-70 w-full h-full backdrop-blur-sm'/>
        <div className='absolute z-10 scale-125 w-full h-[100vw] rounded-full' style={{ boxShadow: '1px -1px 200px 40vw #000000ee inset'}}/>
        <div className='absolute z-20 w-[300px] h-[300px] bg-[#000000dd] rounded flex flex-col items-center justify-center p-3 gap-2'>
            <h2 className='text-xl uppercase font-semibold mb-4'>
                Login
            </h2>
            <div className='group rounded w-full h-fit focus-within:border border border-zinc-700 focus-within:border-violet-400 overflow-hidden relative transition-all'>
                <input className='active:outline-none focus:outline-none bg-[#33333380] px-2 py-1 w-full' placeholder='email'/>
            </div> 
            <div className='group rounded w-full h-fit focus-within:border border border-zinc-700 focus-within:border-violet-400 overflow-hidden relative transition-all'>
                <input className='active:outline-none focus:outline-none bg-[#33333380] px-2 py-1 w-full' placeholder='password'/>
            </div>
            <button className='uppercase bg-violet-700 rounded w-full px-2 py-2'>
                нэвтрэх
            </button>
        </div>
    </Transition>
}

export default Page