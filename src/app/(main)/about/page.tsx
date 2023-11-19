'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TeamCard, Transition, AnimatedParagraph } from '@/components'
import zurag from '../../../../public/images/about.png'
import profile from '../../../../public/images/profile.png'

function Page() {
    const team = [
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
        {Name: 'Teammate 1', Position: 'CEO', Image: profile.src},
    ]
    return <Transition direction='left'>
        <div className='h-[500px] w-screen relative flex justify-center items-center flex-col' style={{backgroundImage: `url(${zurag.src})`, backgroundPosition: 'fixed !important', backgroundSize: 'cover'}}>
            <div className='absolute z-[5] w-full h-full left-0 top-0 bg-black bg-opacity-70 backdrop-blur-sm'/>
            <div className='z-[10] flex flex-col justify-center items-center gap-10'>
                <motion.h2 initial={{opacity: 0, scale: 0.3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='text-5xl font-bold'>LOGO</motion.h2>
                <motion.h2 initial={{opacity: 0, scale: 0.3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='text-[6rem] font-bold'>FILMBRIDGE</motion.h2>
            </div>
        </div>
        <div className='container mx-auto flex flex-col gap-5 items-center mt-10'>
            <h3 className='uppercase font-semibold text-3xl'>Who we are</h3>
            
            <div className='text-justify px-4'>
                <AnimatedParagraph paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus erat. Sed molestie, leo et posuere pellentesque, quam odio sagittis metus, sit amet imperdiet mauris enim ut dui. 
                Integer scelerisque, lacus sit amet tincidunt efficitur, urna magna ornare augue, ac posuere quam diam dictum lacus. Nullam tincidunt cursus pellentesque. Fusce ut leo sagittis erat posuere 
                eleifend. Morbi maximus sapien nulla, commodo aliquam nulla pellentesque a. Proin in odio neque. Morbi consectetur ligula eu aliquam faucibus. Morbi at dolor sollicitudin, imperdiet arcu quis, 
                aliquam diam.'/>
                
            </div>

            <div className='text-justify px-4'>
                In libero est, ultricies sed varius non, eleifend eu tellus. Sed tempor ipsum lectus, et porta sapien facilisis sed. Nam condimentum sem convallis enim accumsan, ut semper sem 
                ultricies. Donec elementum tristique eleifend. Etiam a ante congue, rutrum risus et, tincidunt orci. Aenean eros felis, viverra eu lectus ut, consequat dapibus eros. Aliquam eu 
                purus facilisis, efficitur quam vel, pellentesque nunc. Donec eu tortor vehicula, placerat justo et, aliquam nisl. Nullam id vehicula risus. Nullam luctus convallis dictum. 
                Phasellus pharetra nunc malesuada nisi feugiat, id ultricies est viverra.
            </div>

            <div className='text-justify px-4'>
                Nulla ac ex odio. Nam vehicula aliquet leo vel porta. Mauris a augue quis mi lacinia placerat. Duis ultrices convallis dui, vitae feugiat urna porta sit amet. 
                Phasellus accumsan euismod lorem eget volutpat. Cras pulvinar ipsum a ante accumsan, vitae vehicula lorem fermentum. Pellentesque porttitor mi sit amet magna volutpat tincidunt. 
                Nulla facilisi. Ut eget elit aliquet, gravida nisl vitae, aliquet mi.
            </div>

            <div className='text-justify px-4'>
                Sed non leo risus. Donec non dolor eu erat placerat egestas. Fusce sodales turpis ut nibh imperdiet, a fermentum quam consequat. Nullam convallis laoreet placerat. 
                Etiam tincidunt in nisi sit amet maximus. Aliquam et massa non nibh tempus volutpat. Vestibulum eu facilisis velit. Suspendisse pharetra elementum ex, ut fringilla sem 
                vestibulum ac. Sed fringilla nisi dapibus eros molestie, id tincidunt justo sagittis. Donec consectetur vitae ante feugiat euismod. Sed et luctus arcu.
            </div>

            <div className='text-justify px-4'>
                Vivamus eu ullamcorper lorem. Nunc at pulvinar velit, sit amet accumsan nibh. Donec sodales arcu sit amet consectetur hendrerit. Fusce varius nibh quis velit volutpat condimentum. 
                In hac habitasse platea dictumst. Sed porttitor luctus nibh sed ultrices. Nam dapibus libero a nisl dictum accumsan faucibus vitae risus.
            </div>
            
            <div className='mt-10 flex flex-col w-full mb-40 items-center gap-3'>
                <h3 className='uppercase font-semibold text-3xl'>Our team</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-flow-row gap-4 w-full px-4'>
                    {
                        team.map((x, i) => {
                            return <TeamCard key={i} data={x}/>
                        })
                    }
                </div>
            </div>
        </div>
    </Transition>
}

export default Page