import { Icon } from ".."
import { useRouter, usePathname } from "next/navigation"
function AdminSideBar() {
    const zam = usePathname()
    const router = useRouter()
    
    const list = [
        {icon: 'solar:tablet-broken', href: '/dashboard', name: 'Хянах самбар'},
        {icon: 'solar:layers-minimalistic-broken', href: '/dashboard/film-list', name: 'Кино жагсаалт'},
        {icon: 'solar:calendar-broken', href: '/calendar', name: 'Календар'},
    ]

    return <div className="w-[300px] min-w-[300px] h-screen bg-[#212430] flex flex-col">
        <div className="h-[50px] min-h-[50px] px-2 flex items-center justify-center cursor-pointer" onClick={() => {router.push('/')}}>
            <h2 className="uppercase text-xl font-bold">FILMBRIDGE</h2>
        </div>

        <div className="h-full overflow-auto px-3 flex flex-col gap-1">
            <label className="text-base font-extrabold opacity-60">Menu</label>
            {
                list.map((x, i) => {
                    return <div key={x.href} className={`flex flex-row py-2 px-2 cursor-pointer hover:bg-[#1c1a27] hover:border-l-4 border-l-indigo-700 hover:font-semibold ${zam === x.href && 'bg-[#1c1a27] border-l-4 font-semibold'} rounded overflow-hidden transition-all cursor-pointerflex flex-row items-center gap-2`} onClick={() => {router.push(x.href)}}>
                        <Icon size="1.3rem" icon={x.icon}/>
                        {x.name}
                    </div>
                })
            }
        </div>
    </div>
}

export default AdminSideBar