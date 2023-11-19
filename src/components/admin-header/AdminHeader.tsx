import { Icon } from ".."
function AdminHeader() {
    return <div className={`sticky top-0 w-full h-[50px] min-h-[50px] bg-opacity-60 flex flex-row items-center px-10 transition-all bg-[#1c1a27] backdrop-blur justify-between`}>
        <div></div>
        <div className="flex items-center flex-row gap-2">
            <button className="transition-all p-1 hover:bg-[#2c2a34] rounded">
                <Icon icon="solar:bell-broken" size="1.5rem"/>
            </button>
            <button className="transition-all p-1 hover:bg-[#2c2a34] rounded">
                <Icon icon="solar:logout-broken" size="1.5rem"/>
            </button>
        </div>
    </div>
}

export default AdminHeader