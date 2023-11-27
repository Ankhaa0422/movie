/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { Divider, FilmCard, HomeSlider, Icon, Transition, Cursor, showLoader, TestSlider } from '@/components'
import { deepClone, isNullOrUndefined, omdbApiCall } from '@/utility'
import { motion } from 'framer-motion'
import { renderToString } from 'react-dom/server'
import { getHomeList } from '@/server-actions'
let dummyJagsaalt:any[] = []
export default function Home() {

    const [sliderData, setSliderData] = React.useState<any[]>([])
    const [listData, setListData] = React.useState<any>({
        upcomingList: [],
        onStreamList: [],
        inTheaterList: []
    })

    React.useEffect(() => {
        showLoader(true)
        async function getData() {
            const result = await getHomeList()
            if(!isNullOrUndefined(result)) {
                listData.upcomingList = result.upcomingData
                listData.onStreamList = result.onStreamData
                listData.inTheaterList = result.inTheaterData
                setSliderData(result.sliderData)
                setListData({...listData})
            }
        }
        getData().finally(() => {
            showLoader(false)
        })
    }, [])

    console.log(listData, sliderData)

    return (
        // <Transition layout direction='left' outDirection='left'>
        <>
            <Cursor isGelly/>
            <main className={`relative h-fit select-none overflow-hidden text-white antialiased`}>
                <div className='max-h-screen min-h-screen h-screen relative'>
                    {/* {
                        sliderData.length > 0 && <HomeSlider sliderData={sliderData} initData={sliderData[0]} />
                    } */}
                    {
                        sliderData.length > 0 && <TestSlider data={sliderData} />
                    }
                    
                </div>
                <div className='container mx-auto mt-10 mb-10 flex flex-col'>
                    <TestHome text='In Theater' datas={listData.inTheaterList}/>
                    <TestHome text='On Stream' datas={listData.onStreamList}/>
                    <TestHome text='Upcoming' datas={listData.upcomingList}/>
                </div>
            </main>
        </>
            // {/* </Transition> */}
        
    );
}

function TestHome ({text, href, hrefText, datas}:{text:string, href?:string, hrefText?:string, datas:any[]}) {
    const testRef = React.useRef<HTMLDivElement|null>(null)

    return <div className='w-full h-fit flex flex-col gap-2 mt-10'>
        <Divider text={text} href={href} hrefText={hrefText}/>
        <div className='flex flex-row gap-2 w-full relative'>
            <motion.div ref={testRef} className='relative w-full overflow-hidden flex flex-row scroll-smooth'>
                <div className='absolute h-full left-0 w-[50px] min-w-[50px] z-[9999] flex items-center justify-center bg-gradient-to-r from-[#1c1a27] to-transparent cursor-pointer'>
                    {/* <Icon icon='uiw:left' size='3rem'/> */}
                </div>
                <motion.div 
                    data-cursor-size='100px'
                    data-cursor-text={`<div class='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.857 15.962a.5.5 0 0 0 .243.68l9.402 4.193c1.496.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.741-1.388-.81-2.87-2.306-2.202l-3.524 1.572a2 2 0 0 0-.975.932L9.857 15.962Z"/><path fill="currentColor" d="M8.466 15.39a.5.5 0 0 1-.65.233l-4.823-2.15c-1.324-.59-1.324-2.355 0-2.945L11.89 6.56a.5.5 0 0 1 .651.68l-4.075 8.15Z" opacity=".5"/></svg>
                        <span>Drag</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.143 15.962a.5.5 0 0 1-.244.68l-9.402 4.193c-1.495.667-3.047-.814-2.306-2.202l3.152-5.904c.245-.459.245-1 0-1.458L2.191 5.367c-.74-1.388.81-2.87 2.306-2.202l3.525 1.572a2 2 0 0 1 .974.932l5.147 10.293Z"/><path fill="currentColor" d="M15.533 15.39a.5.5 0 0 0 .651.233l4.823-2.15c1.323-.59 1.323-2.355 0-2.945L12.109 6.56a.5.5 0 0 0-.651.68l4.075 8.15Z" opacity=".5"/></svg>
                    </div>`}
                    data-cursor-textcolor={'#000'}
                    data-cursor-color='#ffffffaa'
                    data-cursor-backdropblur="4px"
                    drag={'x'} 
                    dragConstraints={testRef} 
                    className='flex flex-row gap-4 w-fit'
                >
                    {
                        datas.map((x:any, i:number) => {
                            return <div key={i} className='w-[208px] min-w-[208px] max-w-[208px] h-fit'>
                                <FilmCard data={x}/>
                            </div>
                        })
                    }
                </motion.div>
                <div className='absolute h-full right-0 w-[50px] min-w-[50px] z-[9999] flex items-center justify-center bg-gradient-to-l from-[#1c1a27] to-transparent cursor-pointer'>
                    {/* <Icon icon='uiw:right' size='3rem'/> */}
                </div>
            </motion.div>
        </div>
    </div>
}