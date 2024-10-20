import Image from 'next/image'
import React from 'react'
import { useCountries } from '../lib/getCountries'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { AddToFavouriteButton, DeleteFromFavoriteButton } from './SubmitButton'
import { addToFavorite, DeleteFromFavorite } from '../action'

interface iAppProps {
    imagePath: string,
    description: string,
    location: string,
    price: number,
    userId: string | undefined,
    isInFavoriteList: boolean,
    favoriteId: string,
    homeId: string,
  pathName: string,
}

export default function ListingCard({ description, price, location, imagePath, userId, favoriteId,
    isInFavoriteList, homeId, pathName, }: iAppProps) {
    const { getCountriesByValue } = useCountries()
    const country = getCountriesByValue(location)

    return (
        <div className='flex flex-col'>
            <div className='relative h-72'>
                <Image
                    src={`https://umkyviuvcwmjhrhnmmvl.supabase.co/storage/v1/object/public/images/${imagePath}`}
                    alt='Image of property'
                    fill
                    className='rounded-lg h-full object-cover'
                />

                {userId && (
                    <div className='z-10 absolute top-2 right-2'>
                        {isInFavoriteList ? (
                            <form action={DeleteFromFavorite}>
                                <input type="hidden" name="favoriteId" value={favoriteId} />
                                <input type="hidden" name="userId" value={userId} />
                                <input type="hidden" name="pathName" value={pathName} />
                                <DeleteFromFavoriteButton />
                            </form>
                        ) : (
                            <form action={addToFavorite}>
                                <input type="hidden" name="homeId" value={homeId} />
                                <input type="hidden" name="userId" value={userId} />
                                <input type="hidden" name="pathName" value={pathName} />
                                <AddToFavouriteButton />
                            </form>
                        )}
                    </div>
                )}
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
