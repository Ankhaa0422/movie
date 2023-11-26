'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TeamCard, Transition, AnimatedParagraph } from '@/components'
import zurag from '../../../../public/images/about.png'
import profile from '../../../../public/images/profile.png'
import TeamCardTwo from '@/components/TeamCardTwo'
function Page() {
    const team = [
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
                <AnimatedParagraph paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus erat. Sed molestie, leo et posuere pellentesque, quam odio sagittis metus, sit amet imperdiet mauris enim ut dui. 
                    Integer scelerisque, lacus sit amet tincidunt efficitur, urna magna ornare augue, ac posuere quam diam dictum lacus. Nullam tincidunt cursus pellentesque. Fusce ut leo sagittis erat posuere 
                    eleifend. Morbi maximus sapien nulla, commodo aliquam nulla pellentesque a. Proin in odio neque. Morbi consectetur ligula eu aliquam faucibus. Morbi at dolor sollicitudin, imperdiet arcu quis, 
                    aliquam diam.'/>
            </div>

            <div className='text-justify px-4'>
                <AnimatedParagraph paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus erat. Sed molestie, leo et posuere pellentesque, quam odio sagittis metus, sit amet imperdiet mauris enim ut dui. 
                    Integer scelerisque, lacus sit amet tincidunt efficitur, urna magna ornare augue, ac posuere quam diam dictum lacus. Nullam tincidunt cursus pellentesque. Fusce ut leo sagittis erat posuere 
                    eleifend. Morbi maximus sapien nulla, commodo aliquam nulla pellentesque a. Proin in odio neque. Morbi consectetur ligula eu aliquam faucibus. Morbi at dolor sollicitudin, imperdiet arcu quis, 
                    aliquam diam.'/>
            </div>

            <div className='text-justify px-4'>
                <AnimatedParagraph paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus erat. Sed molestie, leo et posuere pellentesque, quam odio sagittis metus, sit amet imperdiet mauris enim ut dui. 
                    Integer scelerisque, lacus sit amet tincidunt efficitur, urna magna ornare augue, ac posuere quam diam dictum lacus. Nullam tincidunt cursus pellentesque. Fusce ut leo sagittis erat posuere 
                    eleifend. Morbi maximus sapien nulla, commodo aliquam nulla pellentesque a. Proin in odio neque. Morbi consectetur ligula eu aliquam faucibus. Morbi at dolor sollicitudin, imperdiet arcu quis, 
                    aliquam diam.'/>
            </div>

            <div className='text-justify px-4'>
                <AnimatedParagraph paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus erat. Sed molestie, leo et posuere pellentesque, quam odio sagittis metus, sit amet imperdiet mauris enim ut dui. 
                    Integer scelerisque, lacus sit amet tincidunt efficitur, urna magna ornare augue, ac posuere quam diam dictum lacus. Nullam tincidunt cursus pellentesque. Fusce ut leo sagittis erat posuere 
                    eleifend. Morbi maximus sapien nulla, commodo aliquam nulla pellentesque a. Proin in odio neque. Morbi consectetur ligula eu aliquam faucibus. Morbi at dolor sollicitudin, imperdiet arcu quis, 
                    aliquam diam.'/>
            </div>
            
            <div className='mt-10 flex flex-col w-full mb-40 items-center gap-3'>
                <h3 className='uppercase font-semibold text-3xl'>Our team</h3>
                {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-flow-row gap-4 w-full px-4'>
                    {
                        team.map((x, i) => {
                            // return <TeamCard key={i} data={x}/>
                            return <TeamCardTwo key={i} data={x}/>
                        })
                    }
                </div> */}
                <div className='flex justify-center flex-wrap max-w-[100em] mx-auto gap-[0.938rem] translate-y-[1em] relative z-10'>
                    {
                        team.map((x, i) => {
                            // return <TeamCard key={i} data={x}/>
                            return <TeamCardTwo key={i} data={x}/>
                        })
                    }
                </div>
            </div>
        </div>
    </Transition>
}

export default Page