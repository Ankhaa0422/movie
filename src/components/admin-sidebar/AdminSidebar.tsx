import { Icon } from ".."
function AdminSideBar() {
    return <div className="w-[350px] min-w-[350px] h-screen bg-[#212430] flex flex-col">
        <div className="h-[50px] min-h-[50px] px-2 flex items-center justify-center">
            <h2 className="uppercase text-xl font-bold">FILMBRIDGE</h2>
        </div>
        <div className="h-full overflow-auto px-3 flex flex-col gap-1">
            <label className="text-base font-extrabold opacity-60">Menu</label>
            <div className="py-2 px-2 hover:bg-[#1c1a27] rounded overflow-hidden transition-all cursor-pointer hover:border-l-4 border-l-indigo-700 hover:font-semibold flex flex-row items-center gap-2">
                <Icon size="1.3rem" icon={'solar:tablet-broken'}/>
                DASHBOARD
            </div>
            <div className="py-2 px-2 hover:bg-[#1c1a27] rounded overflow-hidden transition-all cursor-pointer hover:border-l-4 border-l-indigo-700 hover:font-semibold flex flex-row items-center gap-2">
                <Icon size="1.3rem" icon={'solar:layers-minimalistic-broken'}/>
                MOVIE LIST
            </div>
            <div className="py-2 px-2 hover:bg-[#1c1a27] rounded overflow-hidden transition-all cursor-pointer hover:border-l-4 border-l-indigo-700 hover:font-semibold flex flex-row items-center gap-2">
                <Icon size="1.3rem" icon={'solar:calendar-broken'}/>
                CALENDAR
            </div>
        </div>
    </div>
}

export default AdminSideBar