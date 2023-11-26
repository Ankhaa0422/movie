/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from "react"
import { Transition, FilmCard, Icon, Modal, AddMovie } from "@/components"
import { omdbApiCall, deepClone } from "@/utility"
import { getFilmList, deleteFilm } from "@/server-actions"
import { useRouter } from "next/navigation"
let dummyJagsaalt:any[] = []
function Page() {
    const [state, setState] = React.useState<any[]>([])
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const result:any[] = await getFilmList(null)
        setState(result)
    }

    const modalOnClose = () => {
        setOpen(false)
        getData()
    }

    const deleteData = async (id:string) => {
        const res = await deleteFilm(id)
        if(res) {
            getData()
        }
    }

    return <Transition direction="down" className="container mx-auto flex flex-col gap-10">
        
        <div className="flex flex-row justify-between">
            <div className="flex flex-row py-2 px-3 bg-cyan-950 rounded bg-opacity-30 items-center gap-2 w-[300px]">
                <Icon icon="solar:rounded-magnifer-broken" className="px-2 border-r"/>
                <input className="active:outline-none focus:outline-none bg-transparent w-full" placeholder="search..."/>
            </div>
            <button className="px-8 py-2 bg-cyan-700 rounded" onClick={() => {setOpen(true)}}>
                Add film
            </button>
        </div>
        {/* <div className="flex flex-wrap justify-start gap-2 w-full h-[300vh]">
            {
                state.map((x, i) => {
                    return <div key={i} className="h-fit w-[200px]">
                        <FilmCard data={x}/>
                    </div>
                })
            }
        </div> */}
        <div className="w-full h-fit p-2">
            <div className="w-full h-fit sticky top-0 bg-[#2c2a34] rounded-t">
                <table className="table-fixed w-full">
                    <colgroup>
                        <col width={40}/>
                        <col width={40}/>
                        <col width={200}/>
                        <col width={200}/>
                        <col width={200}/>
                        <col width={80}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="text-center py-4 text-lg">id</th>
                            <th className="text-center py-4 text-lg">Poster</th>
                            <th className="text-center py-4 text-lg">Title</th>
                            <th className="text-center py-4 text-lg">Genre</th>
                            <th className="text-center py-4 text-lg">Status</th>
                            <th className="text-center py-4 text-lg">action</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="w-full h-fit rounded-b overflow-hidden">
                <table className="table-fixed w-full">
                    <colgroup>
                        <col width={40}/>
                        <col width={40}/>
                        <col width={200}/>
                        <col width={200}/>
                        <col width={200}/>
                        <col width={80}/>
                    </colgroup>
                    <tbody>
                        {
                            state.map((x, i) => {
                                return <tr key={i} className="hover:bg-[#3a3c44] transition-all border-b border-fuchsia-950" >
                                    <td className="text-center py-1">{i+1}</td>
                                    <td className="text-center flex justify-center py-1">
                                        <img src={x.Poster} width={50} className="rounded"/>
                                    </td>
                                    <td className="py-1">{x.Title}</td>
                                    <td className="py-1">{x.Genre}</td>
                                    <td className="text-center py-1"><span className="px-2 py-1 rounded bg-cyan-300 !text-zinc-700 cursor-pointer">{x.Status}</span></td>
                                    <td className="text-center py-1">
                                        <div className="w-full h-full flex gap-2 items-center justify-center">
                                            <button className="bg-green-600 p-1 rounded" onClick={() => {router.push(`/dashboard/film-list/${x.id}`)}}>
                                                <Icon icon="solar:clapperboard-edit-linear" size="1.4rem"/>
                                            </button>
                                            <button className="bg-rose-600 p-1 rounded" onClick={() => {deleteData(x.id)}}>
                                                <Icon icon="solar:trash-bin-trash-broken" size="1.4rem"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <Modal
            open={open}
            close={() => {modalOnClose()}}
            title={'Add Film'}
        >
            <AddMovie />
            <div className="hidden"/>
        </Modal>
    </Transition>
}

export default Page