'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Transition, AnimatedParagraph, Cursor } from '@/components'
import zurag from '../../../../public/images/peakpx.jpg'
import profile from '../../../../public/images/profile.png'
import TeamCardTwo from '@/components/TeamCardTwo'
import acemaker from '../../../../public/partner/acemaker.png'
import agcstudio from '../../../../public/partner/agcstudio.png'
import allrights from '../../../../public/partner/allrights.webp'
import aniplex from '../../../../public/partner/aniplex.png'
import blackmandala from '../../../../public/partner/blackmandala.png'
import cj from '../../../../public/partner/cj.png'
import contentPanda from '../../../../public/partner/contentpanda.png'
import filmua from '../../../../public/partner/filmua.png'
import fox from '../../../../public/partner/fox.png'
import lionsgate from '../../../../public/partner/lionsgate.png'
import lotte from '../../../../public/partner/lotte.webp'
import lumine from '../../../../public/partner/lumine.png'
import magnolia from '../../../../public/partner/magnolia.png'
import miramax from '../../../../public/partner/miramax.png'
import muse from '../../../../public/partner/muse.png'
import paramount from '../../../../public/partner/paramount.png'
import studio100 from '../../../../public/partner/studio100.png'
import stx from '../../../../public/partner/stx.png'
import voltage from '../../../../public/partner/voltage.png'
import logo from '../../../../public/logo.png'
import { siteLanguage } from '@/utility/defination'
import { useLocalStorage } from '@mantine/hooks'
import Image from 'next/image'
function Page() {
    const team = [
        {Name: 'Tsogtbayar Namsrai', Position: 'CEO', Image: profile.src},
        {Name: 'Purevrinchin Tsogt-Ochir', Position: 'COO', Image: profile.src},
        {Name: 'Munkhnasan Batdelger', Position: 'CFO', Image: profile.src},
        {Name: 'Munkh-Od Gantsooj', Position: 'CMO', Image: profile.src},
        {Name: 'Sunder Kimatrai', Position: 'Business Advisor', Image: profile.src},
        {Name: 'Yumjir-Udval Jargal', Position: 'General Accountant', Image: profile.src},
        {Name: 'Purevsuren Purevdorj', Position: 'Accountant', Image: profile.src},
        {Name: 'Zorigt Ganbaatar', Position: 'Digital Creator', Image: profile.src},
        {Name: 'Bayarsaikhan Laibuu', Position: 'Foreign Affair Manager', Image: profile.src},
        {Name: 'Purevsuren Boldkhuyag', Position: 'Lawyer', Image: profile.src},
        {Name: 'Undraa Agvaannyam', Position: 'Manager', Image: profile.src},
        {Name: 'Maral-Erdene Bulgandash', Position: 'Manager', Image: profile.src},
        {Name: 'Amundari Batbolor', Position: 'Office Manager', Image: profile.src},
        {Name: 'Buyankhishig Bat-Altansukh', Position: 'Content Manager', Image: profile.src},
        {Name: 'Damdinsuren Sharavnyambuu', Position: 'Graphic Designer', Image: profile.src},
        {Name: 'Turbold Erdenebaatar', Position: 'Graphic Designer', Image: profile.src},
    ]
    const [language, setLanguage] = useLocalStorage({'key': 'language', defaultValue: 'en'})
    React.useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
                const scrollerInner = scroller.querySelector(".scroller__inner")!;
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, [])

    return <Transition direction='left'>
        <Cursor isGelly/>
        <div className='h-[500px] w-screen relative flex justify-center items-center flex-col' style={{backgroundImage: `url(${zurag.src})`, backgroundPosition: 'fixed !important', backgroundSize: 'cover'}}>
            <div className='absolute z-[5] w-full h-full left-0 top-0 bg-black bg-opacity-70 backdrop-blur-sm'/>
            <div className='z-[10] flex flex-col justify-center items-center gap-2'>
                <motion.h2 initial={{opacity: 0, scale: 0.3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='text-5xl font-bold'>
                    <Image src={logo.src} width={200} height={200} alt=""/>
                </motion.h2>
                <motion.h2 initial={{opacity: 0, scale: 0.3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='text-[6rem] font-bold'>FILMBRIDGE</motion.h2>
            </div>
        </div>
        <div className='container mx-auto flex flex-col gap-5 items-center mt-10'>
            <h3 className='uppercase font-semibold text-3xl'>{siteLanguage['who'][language]}</h3>
            
            <div className='text-justify px-4 w-full'>
                <AnimatedParagraph paragraph=' The Filmbridge LLC was established in 2019 to distribute foreign language contents to Mongolian cinema market. An addition to our more than 10 years local contents distribution experience.'/>
                
            </div>
            <div className='text-justify px-4 w-full'>
                <AnimatedParagraph paragraph='Korean blockbuster Peninsula, Japanese anime Demon Slayer The Movie: Mugen Train and recent Cannes thriller Hunt, directed by and starring Squid Game’s Lee Jung-jae, are among almost 160 titles Filmbridge has released in Mongolia since the distribution company was launched in mid-2019.'/>  
            </div>
            <div className='container mx-auto flex flex-col items-center my-6'>
                <h3 className='uppercase font-semibold text-3xl'>{siteLanguage['partner'][language]}</h3>
                <div className="scroller my-4" data-direction="left" data-speed="slow">
                    <div className="scroller__inner">
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={acemaker.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={agcstudio.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={allrights.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={aniplex.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={blackmandala.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={cj.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={contentPanda.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={filmua.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={fox.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={lionsgate.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={lotte.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={lumine.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={magnolia.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={miramax.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={muse.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={paramount.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={studio100.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={stx.src} alt="" style={{width:'auto', height: 50}} />
                        <motion.img className='contrast-200 saturate-0 grayscale hue-rotate-0 invert' src={voltage.src} alt="" style={{width:'auto', height: 50}} />
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col w-full mb-40 items-center gap-3'>
                
                <h3 className='uppercase font-semibold text-3xl'>{siteLanguage['team'][language]}</h3>
                <div className='flex justify-center flex-wrap max-w-[100em] mx-auto gap-[0.938rem] translate-y-[1em] relative z-10'>
                    {
                        team.map((x, i) => {
                            return <TeamCardTwo key={i} data={x}/>
                        })
                    }
                </div>
            </div>
        </div>
    </Transition>
}

export default Page

