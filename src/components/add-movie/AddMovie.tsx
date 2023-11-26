/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Icon, Input, Select, Date, Number, showLoader } from ".."
import { countries } from '@/utility/defination';
import { motion } from 'framer-motion'
import { omdbApiCall, defaultZurgiinKhemjeegeerHeightBodyo, isNullOrUndefined, deepClone } from '@/utility';
import dayjs from 'dayjs';
import Image from 'next/image';
import 'react-quill/dist/quill.snow.css';
import { useFocusTrap } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import { addFilm, uploadPoster } from '@/server-actions';
let timeout:NodeJS.Timeout|undefined
export default function AddMovie (props:any) {
    console.log(props)
    const focusTrapRef = useFocusTrap();
    const ReactQuill = React.useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const [state, setState] = React.useState<object|any>({
        imdbID: undefined,
        Title: undefined,
        Rated: undefined,
        Genre: undefined,
        Plot: undefined,
        Poster: undefined,
        Year:undefined,
        Country: undefined,
        Actors: undefined,
        Runtime: undefined,
        Type: undefined,
        Writer: undefined,
        Released: undefined,
        MnPlot: undefined,
        Trailer: undefined,
        Status: undefined
    })
    const [imdbID, setImdbID] = React.useState<string|undefined>()
    const [enPlot, setEnPlot] = React.useState()
    const [mnPlot, setMnPlot] = React.useState()
    const [filmScreenShots, setFilmScreenShots] = React.useState<any[]>([])
    const [links, setLinks] = React.useState<any[]>([])
    const [link, setLink] = React.useState<string>('')
    const onChange = (key:string, value:string) => {
        if(key === 'Trailer') {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = value.match(regExp);
            state[key] = (match&&match[7].length==11)? match[7] : undefined;
            setState({...state})
        } else {
            state[key] = value
            setState({...state})
        }
    }

    React.useEffect(() => {
        if(!isNullOrUndefined(imdbID) && imdbID !== '') timeout = setTimeout(() => {
            imdbInfo()
        }, 500)
    }, [imdbID])

    const ageRestrict = [
        {value: 'n/a', name: 'n/a'},
        {value: 'G', name: 'G'},
        {value: 'PG', name: 'PG'},
        {value: 'PG-13', name: 'PG-13'},
        {value: 'R', name: 'R'},
        {value: 'NC-17', name: 'NC-17'},
    ]

    const types = [
        {value: 'series', name: 'series'},
        {value: 'movie', name: 'movie'},
    ]

    const status = [
        {value: 'upcoming', name: 'Upcoming'},
        {value: 'onstream', name: 'On stream'},
        {value: 'intheater', name: 'In theater'},
    ]

    const getImdbID = (value:string) => {
        if(timeout) clearTimeout(timeout)
        setImdbID(value)
    }

    async function imdbInfo () {
        showLoader(true)
        const data:any = await omdbApiCall(imdbID ? imdbID : "")
        if(data && data.Response !== 'False') {
            data.Released = dayjs(data.Released).format('YYYY-MM-DD')
            data.Runtime = data.Runtime.replace(" min", '').replace("min", '')
            setEnPlot(data.Plot)
            data['Trailer'] = undefined
            setState({...state, ...data})
        }
        
        showLoader(false)
    }

    const getPlot = (value:any, isMn = false) => {
        if(isMn) {
            setMnPlot(value)
        } else {
            setEnPlot(value)
        }
    }

    const convertImage = (image:any) => {
        return new Promise(resolve => {
            const reader = new FileReader()
            reader.onload = (event:any) => {
                resolve(event?.target.result)
            }
            reader.readAsDataURL(image)
        })
    }

    const getImages = async (event:any) => {
        const files = [...event.target.files]
        const imageList:any[] = []
        for (const file of files) {
            const blob = await convertImage(file)
            imageList.push({name: file.name, blob: blob, file:file})
        }
        setFilmScreenShots(filmScreenShots.concat(imageList))
    }
    
    const dropZoneOnClick = (event:any) => {
        event.preventDefault()
        event.stopPropagation()
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.multiple = true
        input.addEventListener('change', getImages)
        input.click()
    }

    const removeImage = (index:number) => {
        filmScreenShots.splice(index, 1)
        setFilmScreenShots([...filmScreenShots])
    }

    const getImageDrop = async (event:any) => {
        event.preventDefault();
        const files = [...event.dataTransfer.files];
        const imageList:any[] = []
        for (const file of files) {
            const blob = await convertImage(file)
            imageList.push({name: file.name, blob: blob, file:file})
        }
        setFilmScreenShots(filmScreenShots.concat(imageList))
    };

    const onPublish = async () => {
        showLoader(true)
        let data = deepClone(state)
        data['MnPlot'] = mnPlot
        data['Images'] = filmScreenShots
        data['Status'] = isNullOrUndefined(data['Status']) ? 'none' : data['Status']
        data['Links'] = links
        const response = await addFilm(data)
        if(response) {
            props.close()
        }
        showLoader(false)
    }

    const getLink = (e:any) => {
        console.log(e.target.value)
        if(e.target.value != '') {
            links.push(e.target.value)
        } 
        setLinks([...links])
        setLink('')
    }

    const getLinkValue = (value:string) => {
        console.log("value ===>", value)
        setLink(value)
    }

    const removeLink = (index:number) => {
        links.splice(index, 1)
        setLinks([...links])
    }

    const getPoster = async (event:any) => {
        console.log(event.target.files[0])
        const list = [...event.target.files]
        const blob:any = await convertImage(list[0])
        const link = await uploadPoster(list[0], blob)
        state.Poster = link
        setState({...state})
    }
    
    const posterOnClick = (event:any) => {
        event.preventDefault()
        event.stopPropagation()
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.multiple = true
        input.addEventListener('change', getPoster)
        input.click()
    }

    return <div ref={focusTrapRef} className={`w-[calc(100vw-150px)] h-[calc(100vh-100px)] flex flex-row`}>
        <div className="w-full h-full flex flex-col px-4 gap-7 py-7 overflow-auto">
            <div className="flex flex-row gap-3">
                <Input icon='bxl:imdb' value={imdbID} onChange={(value:any) => {getImdbID(value)}} label="imdbID" placeholder="IMDB ID" className='w-[300px]' />
                <Input icon='pajamas:title' value={state.Title} onChange={(value:any) => {onChange('Title', value)}} label="Title" placeholder="Title" className='w-full' />
            </div>
            <div className="flex flex-row gap-3">
                <Select icon="solar:earth-broken" value={state.Status} options={status}  label='Status' placeholder='Status' onChange={(value:any) => {onChange('Status', value)}} className={'w-1/4'}/>
                <Select icon="wpf:restriction-shield" value={state.Rated} label='age restrict' placeholder='age restrict' onChange={(value:any) => {onChange('Rated', value)}} options={ageRestrict} className={'w-1/4'}/>
                <Select icon="solar:checklist-minimalistic-broken" value={state.Type} options={types}  label='Type' placeholder='Type' onChange={(value:any) => {onChange('Type', value)}} className={'w-1/4'}/>
                <Select icon="solar:earth-broken" value={state.Country} options={countries}  label='Country' placeholder='Country' onChange={(value:any) => {onChange('Country', value)}} className={'w-1/4'}/>
            </div>
            <div className="flex flex-row gap-3">
                <Input icon='bxl:imdb' value={state.Writer} onChange={(value:any) => {onChange('Writer', value)}} label="Writer" placeholder="Writer" className='w-3/12' />
                <Input icon='pajamas:title' value={state.Actors} onChange={(value:any) => {onChange('Actors', value)}} label="Actors" placeholder="Actors" className='w-4/12' />
                <Input icon='solar:video-frame-cut-2-broken' value={state.Trailer} onChange={(value:any) => {onChange('Trailer', value)}} label="Trailer" placeholder="Trailer" className='w-5/12' />
            </div>
            <div className="flex flex-row gap-3">
                <Input icon='solar:tag-horizontal-broken' value={state.Genre} onChange={(value:any) => {onChange('Genre', value)}} label="Genre" placeholder="Genre" className='w-1/4' />
                <Number icon='solar:stopwatch-broken' value={state.Runtime} onChange={(value:any) => {onChange('Runtime', value)}} label="Runtime" placeholder="Runtime" className='w-1/4' suffix={'minute'}/>
                <Date icon='solar:calendar-broken' value={state.Released} onChange={(value:any) => {onChange('Released', value)}} label="Released" placeholder="Released" className='w-1/4' />
                <Date type={'year'} icon='pajamas:title' value={state.Year} onChange={(value:any) => {onChange('Year', value)}} label="Year" placeholder="Year" className='w-1/4' />
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <label className='ml-10 font-bold text-base'>English Plot</label>
                <div className='flex w-full h-fit bg-zinc-100 pb-12 rounded overflow-hidden !text-zinc-800'>
                    <ReactQuill theme="snow" value={enPlot} onChange={(value) => {getPlot(value)}} className='w-full min-h-[200px]'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <label className='ml-10 font-bold text-base'>Mongolian Plot</label>
                <div className='flex w-full h-fit bg-zinc-100 pb-12 rounded overflow-hidden !text-zinc-800'>
                    <ReactQuill theme="snow" value={mnPlot} onChange={(value) => {getPlot(value, true)}} className='w-full min-h-[200px]'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex flex-col w-full h-[150px] border-4 rounded border-dashed border-zinc-400 justify-center items-center cursor-pointer hover:bg-cyan-700 transition-all hover:bg-opacity-40'
                    onClick={dropZoneOnClick}
                    onDrop={getImageDrop}
                    onDragOver={e => {e.preventDefault()}}
                >
                    <Icon icon='solar:gallery-add-broken' color='#808080' size='4rem'/>
                    <label className='font-semibold text-zinc-400 text-lg'>Drag image</label>
                </div>
                {/* <div className=' grid grid-flow-row grid-cols-6 w-full h-fit pb-12 rounded overflow-hidden gap-2 !text-zinc-800'> */}
                <div className='columns-6 w-full h-fit pb-12 rounded overflow-hidden gap-2 !text-zinc-800 gap-y-2'>
                        {filmScreenShots.map((x, i) => {
                            return <motion.div initial={{scale: 0}} animate={{scale: 1}} layout key={i} className='group rounded overflow-hidden relative cursor-pointer mb-2' onClick={() => {removeImage(i)}}>
                                <div className='absolute w-full h-full z-10 opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:bg-opacity-60 group-hover:backdrop-blur transition-all flex items-center justify-center'>
                                    <Icon icon='solar:gallery-remove-bold-duotone' size='4rem' color='#9f1239'/>
                                </div>
                                <motion.img src={x.blob} alt={i.toString()}  />
                            </motion.div>
                        })}
                    
                </div>
            </div>
        </div>
        <div className="w-[300px] min-w-[300px] h-full px-5 py-3 flex flex-col gap-4 overflow-auto">
            <button className='py-2 bg-cyan-600 rounded font-semibold' onClick={onPublish}>
                publish
            </button>
            <label className='px-3 text-base font-semibold'>Poster</label>
            <Poster src={state.Poster} posterOnClick={posterOnClick}/> 
            {
                ['onstream', 'intheater'].some(x => x === state.Status) && <>
                    <label className='px-3 text-base font-semibold'>Links</label>
                    <div className='w-full flex flex-col rounded gap-2'>
                        <Input icon='solar:link-broken' value={link} onChange={(value:string) => {getLinkValue(value)}} placeholder={state.Status === 'onstream' ? 'stream link' : state.Status === 'intheater' && 'ticket link' } onPressEnter={getLink}/>
                        {
                            links.map((x, i) => {
                                return <div key={i} className='w-full flex flex-row py-1 border px-2 rounded items-center'>
                                    <div className='text-ellipsis w-full overflow-hidden whitespace-nowrap'>{x}</div>
                                    <button className='text-ellipsis' onClick={() => {removeLink(i)}}><Icon icon='solar:minus-circle-broken' color='#e11d48' /></button>
                                </div>
                            })
                        }
                    </div>
                </>
            }
            
        </div>
    </div>
}

function Poster({src, posterOnClick}:{src:string|undefined; posterOnClick:Function}) {
    const ref = React.useRef<HTMLDivElement|null>(null)
    React.useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [src])

    const onResize = () => {
        if(ref.current) {
            ref.current.style.height = `${defaultZurgiinKhemjeegeerHeightBodyo(ref.current.clientWidth)}px`
        }
    }
    return <div ref={ref} 
        onClick={(event) => {posterOnClick(event)}}
        className={`w-full flex justify-center items-center relative rounded overflow-hidden ${!src && 'border-4 border-dashed border-zinc-500'} cursor-pointer`} 
        style={{height: defaultZurgiinKhemjeegeerHeightBodyo(250)}}
    >
        {
            src ? <Image src={src} fill alt={src}/>
            : <Icon icon='solar:gallery-minimalistic-broken' size='5rem' color='#818181'/>
        }
    </div>
}