"use client"

import { Button } from '@/components/ui/button';
import { Heart, Loader2 } from 'lucide-react';
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function CreationSubmit() {
    const {pending} = useFormStatus();
  return (
    <>
        {
            pending?
            (
                <Button disabled size="lg">
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Please Wait
                </Button>
            ):
            (
                <Button size="lg">
                    Next
                </Button> 
            )
        }
    </>
  )
}


export function AddToFavouriteButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button
            variant="outline"
            size="icon"
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="bg-primary-foreground"
            type="submit"
          >
            <Heart className="w-4 h-4" />
          </Button>
        )}
      </>
    );
}

export function DeleteFromFavoriteButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button
            variant="outline"
            size="icon"
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="bg-primary-foreground"
            type="submit"
          >
            <Heart className="w-4 h-4 text-primary" fill="#E21C49" />
          </Button>
        )}
      </>
    );
}
