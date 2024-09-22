import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export default function page() {
  return (
    <>
        <div className='w-3/5 mx-auto'>
            <h2 className='text-3xl font-semibold tracking-tight transition-colors mb-10'>
                Where is your Home located?
            </h2>
        </div>

        <form>
            <div className='w-3/5 mx-auto'>
                <div className='mb-5'>
                    <Select required>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Countries</SelectLabel>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </form>
    </>
  )
}
