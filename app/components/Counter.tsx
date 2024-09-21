"use client"

import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function Counter() {

    const [amount, setAmount] = useState(0);

    function increase() {
        setAmount(amount + 1);
    }

    function decrease() {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    }
  return (
    <div className='flex items-center gap-x-4'>
        <Button variant='outline' size='icon' type='button' onClick={decrease}>
            <Minus className='h-4 w-4 text-primary' />
        </Button>
        <p>{amount}</p>
        <Button variant="outline" size="icon" type='button' onClick={increase}>
            <Plus className='h-4 w-4 text-primary' />
        </Button>
    </div>
  )
}
