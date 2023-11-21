/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from "react"
import { Transition, FilmCard } from "@/components"
import { omdbApiCall, deepClone } from "@/utility"
let dummyJagsaalt:any[] = []
function Page() {
    const qwerty = ['tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364']
    const [state, setState] = React.useState<any[]>([])
    const mountRef = React.useRef(false)
    
    React.useEffect(() => {
        if(!mountRef.current) {
            mountRef.current = true
            dummyJagsaalt = []
            test(0)
        }
    }, [])
    
    function test (index:number) {
        if(index < qwerty.length) {
            omdbApiCall(qwerty[index]).then((result:any) => {
                const cloneResult = deepClone(result)
                dummyJagsaalt.push(cloneResult)
            }).finally(() => {
              test(index + 1)
            })
        } else {
          setState(dummyJagsaalt)
        }
    }

    return <Transition direction="down">
        <div className="flex flex-wrap justify-center gap-2">
            {
                state.map((x, i) => {
                    return <div key={i} className="h-fit w-[158px]">
                        <FilmCard data={x}/>
                    </div>
                })
            }
        </div>
    </Transition>
}

export default Page