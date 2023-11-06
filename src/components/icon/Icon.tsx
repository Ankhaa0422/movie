import React from 'react'
import { Icon as Durs } from '@iconify/react'

interface Props {
    icon:string,
    ungu?:string,
    khemjee?:string,
    className?:string,
    style?:object,
}

const Icon = (props:Props) => {
    const { icon, ungu, khemjee = '1rem', className, style = {} } = props
    return <span className={className} style={{
        fontSize:khemjee,
        color:ungu,
        ...style
    }}>
        <Durs icon={icon} />
    </span>
}

export default Icon