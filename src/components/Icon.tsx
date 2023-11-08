import { Icon as Durs } from '@iconify/react'
import { IconData } from '@/utility/interfaceAndTypes'

function Icon ({icon, color, size = '1rem', className = '', style = {} }:IconData) {
    return <span className={`${className}`} style={{
        fontSize: size,
        color: color,
        ...style
    }}>
        <Durs icon={icon} />
    </span>
}

export default Icon