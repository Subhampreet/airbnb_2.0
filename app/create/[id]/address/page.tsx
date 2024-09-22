"use client"


import CreationBottomBar from '@/app/components/CreationBottomBar';
import Map from '@/app/components/Map';
import { useCountries } from '@/app/lib/getCountries'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'

export default function page() {
    const {getAllCountries} = useCountries();

    const [locationValue, setLocationValue] = useState("")
    const LazyMap = dynamic(() => import('@/app/components/Map'), { ssr: false,  loading: () => <Skeleton className='h-[50vh] w-full' /> });


  return (
    <>
        <div className='w-3/5 mx-auto'>
            <h2 className='text-3xl font-semibold tracking-tight transition-colors mb-10'>
                Where is your Home located?
            </h2>
        </div>

        <form>
            <div className='w-3/5 mx-auto mb-36'>
                <div className='mb-5'>
                    <Select required onValueChange={(value) => setLocationValue(value)}>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Countries</SelectLabel>
                                {
                                    getAllCountries().map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.flag} {item.label} / {item.region}
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <LazyMap locationValue={locationValue} />
            </div>

            <CreationBottomBar />
        </form>
    </>
  )
}
