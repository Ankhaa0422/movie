import { isNullOrUndefined } from "@/utility"
import { Icon } from "."
export default function Input (props:any) {
    const { value, onChange, label='', placeholder, icon, className = '', onPressEnter } = props

    const keydown = (e:any) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            if(onPressEnter && typeof onPressEnter === 'function') {
                onPressEnter(e)
            }
        }
    }

    return <div className={`flex flex-row py-2 px-3 bg-cyan-700 rounded bg-opacity-30 items-center gap-2 relative ${className} focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-4 outline-cyan-700 transition-all`}>
        {icon && <Icon icon={icon} size="1.5rem" className=" px-2 border-r"/>}
        <input className="active:outline-none focus:outline-none  bg-transparent w-full" value={value} placeholder={placeholder} onChange={e => {onChange(e.target.value)}} onKeyDown={keydown}/>
        <label className={`absolute ${(!isNullOrUndefined(value) && value !== '') ? 'z-10 translate-y-[-140%] scale-100 opacity-100' : 'z-0 translate-x-0 scale-0 opacity-0'} transition-all`}>{label}</label>
    </div>
}