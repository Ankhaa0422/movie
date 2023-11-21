/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { omdbApiCall } from '@/utility'



function Page(props:any) {
    const {params} = props
    const [filmData, setFilmData] = React.useState<any>(undefined)
    React.useEffect(() => {
        async function getData() {
            omdbApiCall(params['imdbID']).then(result => {
                setFilmData(result)
            })
        }
        getData()
    }, [])
    return <div>
        {
            filmData && <motion.img layoutId={`Poster-${filmData.imdbID}`} src={filmData.Poster}/>
        }
    </div>
}

export default Page