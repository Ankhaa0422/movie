import { Icon } from "@/utility/interfaceAndTypes"
// ----------zagvar----------
// export function DarkIcon ({ icon, ungu, khemjee = '1rem', className, style = {} }:Icon) {
//     return <span></span>
// }

export function DarkIcon ({ color, size = '1rem', className, style = {} }:Icon) {
    return <span className={className} style={{
        fontSize:size,
        color:color,
        ...style
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><path d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456L24.003 4Z"/><path d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13Z"/></g></svg>
    </span>
}