/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { omdbApiCall, defaultZurgiinKhemjeegeerHeightBodyo, cycleArray, isNullOrUndefined } from '@/utility'
import { getFilmInfo } from '@/server-actions'
import { showLoader, Divider } from '@/components'
import Image from 'next/image'
var interval:NodeJS.Timeout|undefined
function Page(props:any) {
    const {params} = props
    const [filmData, setFilmData] = React.useState<any>(undefined)
    const [activeImage, setActiveImage] = React.useState<any>(undefined)
    React.useEffect(() => {
        if(!isNullOrUndefined(filmData)) {
            if(interval) {
                clearInterval(interval)
            }
            if(filmData.Images.length > 1) {
                workInterval()
            }
        }
    }, [activeImage])

    React.useEffect(() => {
        showLoader(true)
        async function getData() {
            const result = await getFilmInfo(params.id)
            setFilmData(result)
            setActiveImage({
                src: result.Images[0],
                index: 0
            })
        }
        getData()
        showLoader(false)
    }, [])
    
    const workInterval = () => {
        interval = setInterval(() => {
            setActiveImage(undefined)
            setTimeout(() => {
                setActiveImage({
                    src:filmData?.Images[activeImage?.index == filmData.Images.length - 1 ? 0 : activeImage?.index + 1],
                    index: activeImage?.index == filmData?.Images.length - 1 ? 0 : activeImage?.index + 1
                })
            }, 100)
        }, 3000)
    }
    
    const getSite = (href:string) => {
        var l = document.createElement("a");
        l.href = href;
        return l;
    };

    console.log({filmData})

    return (
        <div className='flex flex-col'>
            <div className='w-full h-[500px] relative overflow-hidden'>
                <div className='absolute z-10 bg-gradient-to-t from-[#1c1a27] to-transparent w-full h-full '/>
                <AnimatePresence mode='wait'>
                    {
                        activeImage && 
                        <>
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='w-full h-full relative'>
                                <Image src={activeImage.src} alt='' quality={50} className='z-[9]' fill objectFit='cover'/>
                            </motion.div>
                        </>
                    }
                </AnimatePresence>
            </div>
            <div className='flex flex-col sm:flex-row w-full h-fit items-center sm:items-start container px-10 mx-auto sm:px-14 mt-[-200px] z-20 gap-14'>
                <div className='flex flex-col gap-4'>
                    <div className='w-[300px] min-w-[300px] overflow-hidden relative rounded' style={{height: defaultZurgiinKhemjeegeerHeightBodyo(300)}}>
                        <motion.img src={filmData?.Poster} alt='' layoutId={`${filmData?.id}-Poster`} className='z-[9] absolute w-full h-full inset-0 object-cover'/>
                    </div>
                    {
                        filmData?.Status === 'onstream' ? <div className='flex flex-col items-center gap-2'>
                            <h2 className='text-xl font-semibold w-full border-b text-center border-b-zinc-500 py-2'>
                                watch online
                            </h2>
                            {filmData.Links && filmData.Links.map((x:any, i:any) => {
                                return <a href={x} target='_blank' key={i} className='rounded w-full py-2 text-2xl text-center bg-cyan-400 text-cyan-950 font-bold'>{getSite(x).hostname.replace(/(https?:\/\/)?(www.)?/i, '')}</a>
                            }) }
                        </div> : filmData?.Status === 'intheater' ? <div className='flex flex-col items-center gap-2'>
                            <h2 className='text-xl font-semibold w-full border-b text-center border-b-zinc-500 py-2'>
                                Buy ticket
                            </h2>
                            {filmData.Links && filmData.Links.map((x:any, i:any) => {
                                return <a href={x} target='_blank' key={i} className='rounded w-full py-2 text-2xl text-center bg-cyan-400 text-cyan-950 font-bold'>{getSite(x).hostname.replace(/(https?:\/\/)?(www.)?/i, '')}</a>
                            }) }
                        </div> : null
                    }
                </div>
                <div className='flex flex-col w-full py-6 gap-4'>
                    <h2 className='text-3xl font-semibold border-b-2 w-fit'>{filmData?.Title}</h2>
                    <div className='flex flex-row'>
                        <div className='pr-4 border-r-2'>
                            {filmData?.Rated}
                        </div>
                        <div className='px-4 border-r-2'>
                            {filmData?.Released}
                        </div>
                        <div className='pl-4'>
                            {filmData?.Genre}
                        </div>

                    </div>
                    <div className=''>
                        {filmData?.Plot}
                    </div>
                    {
                        !isNullOrUndefined(filmData?.Trailer) && <div className='aspect-video rounded overflow-hidden'>
                            <iframe className='w-full h-full' src={`https://www.youtube.com/embed/${filmData.Trailer}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    }
                    <Divider text='Images'/>
                    <div className='columns-3 w-full h-fit pb-12 rounded overflow-hidden gap-1 !text-zinc-800 gap-y-2'>
                            {filmData?.Images.map((x:any, i:number) => {
                                return <motion.div initial={{scale: 0}} animate={{scale: 1}} layout key={i} className='group rounded overflow-hidden relative cursor-pointer mb-2'>
                                    {/* <div className='absolute w-full h-full z-10 opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:bg-opacity-60 group-hover:backdrop-blur transition-all flex items-center justify-center'>
                                        <Icon icon='solar:gallery-remove-bold-duotone' size='4rem' color='#9f1239'/>
                                    </div> */}
                                    <motion.img src={x} alt={i.toString()}  />
                                </motion.div>
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page