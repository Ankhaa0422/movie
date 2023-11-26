import { isNullOrUndefined } from "@/utility"
import { Icon } from "."

export default function Select (props:any) {
    const { value, onChange, label='', placeholder, icon, className = '', options = [] } = props
    return <div className={`flex flex-row py-2 px-3 bg-cyan-700 rounded bg-opacity-30 items-center gap-2 relative ${className} focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-4 outline-cyan-700 transition-all cursor-pointer`}>
        {icon && <Icon icon={icon} size="1.5rem" className=" px-2 border-r"/>}
        <select className="active:outline-none focus:outline-none bg-transparent w-full cursor-pointer" placeholder="IMDB ID" onChange={(e) => {onChange(e.target.value)}}>
            <option value={''} disabled selected className='!text-zinc-500 px-2 py-1 hover:bg-zinc-200 cursor-pointer'>{placeholder}</option>
            {
                options.map((x:any, i:any) => {
                    return <option key={i} value={x.value} selected={!isNullOrUndefined(value) && value === x.value} className="!text-zinc-800">{x.name}</option>
                })
            }
            {
                !options.some((x:any) => x.value === value) && <option value={value} selected={!isNullOrUndefined(value) && value === value} className="!text-zinc-800">{value}</option>
            }
        </select>
        <label className={`absolute ${value ? 'z-10 translate-y-[-140%] scale-100 opacity-100' : 'z-0 translate-x-0 scale-0 opacity-0'} transition-all`}>{label}</label>
    </div>
}