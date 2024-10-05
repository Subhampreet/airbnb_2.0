import Image from 'next/image'
import React from 'react'
import { useCountries } from '../lib/getCountries'
import Link from 'next/link'

interface iAppProps {
    imagePath: string,
    description: string,
    location: string,
    price: number
}

export default function ListingCard({ description, price, location, imagePath }: iAppProps) {
    const { getCountriesByValue } = useCountries()
    const country = getCountriesByValue(location)

    return (
        <div className='flex flex-col'>
            <div className='relative h-72'>
                <Image
                    src={`https://umkyviuvcwmjhrhnmmvl.supabase.co/storage/v1/object/public/images/${imagePath}`}
                    alt='Image of property'
                    fill
                    className='rounded-lg h-full object-cover mb-3'
                />
            </div>

            <Link href={`/`} className="mt-2">
                <h3 className="font-medium text-base">
                    {country?.flag} {country?.label} / {country?.region}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                    {description}
                </p>
                <p className="pt-2 text-muted-foreground">
                    <span className="font-medium text-black">${price}</span> Night
                </p>
            </Link>
        </div>
    )
}
