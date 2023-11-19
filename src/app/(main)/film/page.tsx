/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { omdbApiCall } from '@/utility'
import { deepClone } from '@/utility'
import { FilmCard, Transition } from '@/components'

let dummyJagsaalt:any[] = []
export default function Page() {
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

    return <Transition direction='left'>
            <div className="container mt-32 mx-auto w-full flex flex-col justify-center px-5">
                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-2 w-full justify-center mx-auto">
                    {
                        state.map((x, i) => {
                            return <FilmCard data={x} key={i}/>
                        })
                    }
                </div>
            </div>
        </Transition>
} 