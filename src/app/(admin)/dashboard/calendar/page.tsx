'use client'
import { Transition } from "@/components"
function Page() {
    return <Transition direction="down" className="w-full">
        <div className="h-screen w-full justify-center items-center flex font-extrabold text-zinc-400 text-3xl">
            COMING SOON
        </div>
    </Transition>
}

export default Page