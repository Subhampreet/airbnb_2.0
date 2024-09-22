"use client"

import React from 'react'

import {MapContainer, TileLayer, Marker} from 'react-leaflet' 
import 'leaflet/dist/leaflet.css'
import { useCountries } from '../lib/getCountries'
import { icon } from 'leaflet'

const ICON = icon({
    iconUrl: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
    iconSize: [40, 40],
})


export default function Map({locationValue} : {locationValue : string}) {
    const {getCountriesByValue} = useCountries()
    const latlang = getCountriesByValue(locationValue)?.latLang
  return (
    <MapContainer scrollWheelZoom={false} className='h-[50vh] rounded-lg relative z-0' center={latlang ?? [52.505, -0.09]} zoom={8} >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={latlang ?? [52.505, -0.09]} icon={ICON} />
    </MapContainer>
  )
}
