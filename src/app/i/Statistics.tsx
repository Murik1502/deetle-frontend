'use client'

import { useProfile } from "@/hooks/useProfile"
import Loader from "@/components/ui/Loader"

export function Statistics() {
    const { data, isLoading } = useProfile()
    

    return isLoading ? ( 
        <Loader /> 
    ) : (
     <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-12 mt-7">
        {data?.statistics.length ? data.statistics.map(statistic => (
            <div
            key={statistic.label}
            className="bg-border/5 rounded p-layout text-center
            hover:-translate-y-3 transition-transform duration-500"
            >
                <div className="text-xl">{statistic.label}</div>
                <div className="text-3xl" font-semibold>{statistic.value}</div>
            </div>
        )) : <div>No statistics</div>}
     </div>    
    )
}