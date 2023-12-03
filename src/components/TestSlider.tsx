/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import gsap from 'gsap'
import { deepClone, defaultZurgiinKhemjeegeerHeightBodyo, isNullOrUndefined } from '@/utility'
import { useLocalStorage } from '@mantine/hooks'
import { usePathname } from 'next/navigation'

export default function TestSlider({data}:{data:any}) {
    let order:any[] = Array.from(Array(data.length).keys())
    const path = usePathname()
    const mountRef = React.useRef(false) 
    const [language, setLanguage] = useLocalStorage({'key': 'language', defaultValue: 'en'})
    const ease = "sine.inOut";
    const _ = (id:string) => {return document.getElementById(id)!}
    const getCardInfo = (index:number) => {
        return `#desc-${index}`
    }
    const getCardRate = (index:number) => {
        return `#rate-${index}`
    }
    const getCardPoster = (index:number) => {
        return `#poster-${index}`
    }
    const getCard = (index:number) => {
        return `#card-${index}`
    }

    React.useEffect(() => {
        if(!mountRef.current) {
            mountRef.current = true
            changeActiveData()
        }
    }, [])

    React.useEffect(() => {
    }, [path])

    function step () {
        let testOrder = deepClone(order)
        testOrder.push(testOrder.shift())
        const prv = testOrder[testOrder.length - 1]
        const active = testOrder[0];
        let offsetTop = 400
        let offsetLeft = 500
        let gap = 12
        offsetTop = window.innerHeight - 400
        offsetLeft = window.innerWidth - 800
        gsap.set(getCard(prv), {zIndex: 0})
        gsap.to(`#title`, {
            y: 50,
            delay: 0.1,
            duration: 0.4,
            opacity: 0,
            ease, 
            onComplete: () => {
                _(`title`).innerHTML = data[active].Title
                gsap.to(`#title`, {
                    y: 0,
                    delay: 0.1,
                    duration: 0.4,
                    opacity: 1,
                    ease,
                })
            }
        });
        gsap.to(`#plot`, {
            y: 50,
            duration: 0.4,
            opacity: 0,
            ease,
            onComplete: () => {
                _(`plot`).innerHTML = data[active].Plot
                gsap.to(`#plot`, {
                    y: 0,
                    duration: 0.4,
                    opacity: 1,
                    ease,
                })
            }
        });
        gsap.to(getCard(active), {
            height: window.innerHeight,
            width: window.innerWidth,
            zIndex: 22,
            x: 0,
            y: 0,
            borderRadius: 0,
            ease,
            onStart: () => {
                gsap.to(getCardInfo(active), {
                    opacity: 0
                })
                gsap.to(getCardRate(active), {
                    opacity: 0
                })
                gsap.to(getCardPoster(active), {
                    opacity: 0
                })
            },
            onComplete: () => {
                const xNew = offsetLeft + (testOrder.length - 1) * (200 + gap);
                gsap.set(getCard(prv), {
                    x: xNew,
                    y: offsetTop,
                    scale: 0,
                    width: 0,
                    height: 0,
                })
                gsap.to(getCardInfo(prv), {
                    opacity: 1
                })
                gsap.to(getCardRate(prv), {
                    opacity: 1
                })
                gsap.to(getCardPoster(prv), {
                    opacity: 1
                })
                gsap.to(getCard(prv), {
                    x: xNew,
                    y: offsetTop,
                    width: 200,
                    height: defaultZurgiinKhemjeegeerHeightBodyo(200),
                    ease,
                    scale: 1,
                    borderRadius: 4,
                    zIndex: 40
                });
                order = testOrder
            }
        })
        testOrder.forEach((x:number, i:number) => {
            if (x !== active) {
                const xNew = offsetLeft + i * (200 + gap);
                // gsap.set(getCard(x), {zIndex: 30})
                gsap.to(getCard(x), {
                    x: xNew,
                    y: offsetTop,
                    width: 200,
                    height: defaultZurgiinKhemjeegeerHeightBodyo(200),
                    ease,
                    delay: 0.1 * (i + 1),
                    scale: 1,
                    borderRadius: 4,
                    zIndex: 40
                });
            }
        })
    }
    
    async function changeActiveData () {
        if(window.location.pathname !== '/') return
        else {
            await step()
            await animate('#indicator', 4, {x: 0})
            changeActiveData()
            // sliderInterval()
        }
    }

    function animate(target:any, duration:any, properties:any) {
        return new Promise((resolve) => {
            gsap.to(target, {
                ...properties,
                duration: duration,
                onComplete: resolve,
            });
        });
    }

    return (
        <div className="w-screen h-screen overflow-hidden relative flex" >
            <div className='absolute w-full h-full bg-gradient-to-t from-[#1c1a27] to-transparent z-[35]' onClick={changeActiveData}></div>
            <div className='w-full h-full absolute flex flex-col md:flex-row'>
                <div className='flex flex-col w-full h-full md:w-2/3 justify-end py-4 z-50 lg:justify-end pb-40 px-5 gap-7'>
                    {/* <div className='flex flex-col'>
                        <div className=" mb-2 h-[2px] w-10 rounded-full bg-white"/>
                        <div id='type' className='hidden lg:block text-base whitespace-normal '>
                            {data[order[0]].Type}
                        </div>
                    </div> */}
                    <h2 id='title' className='overflow-hidden text-4xl font-semibold'>{data[order[0]].Title}</h2>
                    <div id='plot' className='overflow-hidden hidden lg:block text-base whitespace-normal' dangerouslySetInnerHTML={{__html: language === 'en' ? data[order[0]].Plot : data[order[0]].MnPlot}}/>
                </div>
                <div id='indicator'></div>
                <div className='absolute left-0 top-0'>
                    {
                        data.map((x:any, i:number) => {
                            return <div
                                key={i}
                                id={`card-${i}`}
                                className="absolute rounded-sm shadow-md w-full cursor-pointer overflow-hidden"
                                style={{
                                    width: 200, 
                                    height:defaultZurgiinKhemjeegeerHeightBodyo(200),
                                    backgroundImage: `url("${x.Images[0]}")`,
                                    backgroundSize:'cover',
                                    backgroundPosition:'center',
                                }}
                                // onClick={() => {
                                //     router.push(`/film/${data.id}`)
                                // }}
                            >
                                <div id={`poster-${i}`} className='absolute w-full h-full'
                                    style={{
                                        backgroundImage: `url("${x.Poster}")`,
                                        backgroundSize:'cover',
                                    }}
                                >

                                </div>
                                <div id={`rate-${i}`}
                                    className="absolute p-1 top-1 left-1 bg-gray-800 text-gray-100 bg-opacity-70 backdrop-blur-md z-[80] text-xs rounded-sm">
                                    {x['Rated']}
                                </div>
                                <div id={`desc-${i}`}
                                    className="absolute z-10 flex h-full items-end p-4 bg-gradient-to-t from-black to-transparent w-full" 
                                >
                                    <div>
                                        <div
                                            className=" mb-2 h-[2px] w-10 rounded-full bg-white"
                                        ></div>
                                        <p className="text-xs text-[#D5D5D6]">
                                            {x.Type}
                                        </p>
                                        <h1
                                            className="text-base leading-6 text-white line-clamp-2"
                                        >
                                            {x.Title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
