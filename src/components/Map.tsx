import React, { useState } from 'react'
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps'
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const MyMap = withGoogleMap((props: any) => <GoogleMap defaultZoom={17} defaultCenter={{ lat: 30.407141, lng: -87.214373 }}>
  <Marker position={{ lat: 30.407141, lng: -87.214373 }} defaultTitle='Wedding Location' onClick={() => props.toggleShowInfo()} label='💐' />
  <Marker position={{ lat: 30.407825, lng: -87.212923 }} label='🏨'  />
</GoogleMap>)


interface MapProps {
  [key: string]: any
}

const Map: React.FC<MapProps> = (props) => {
  const [showInfo, toggleShowInfo] = useState(false)
  return (
    <MyMap showMarker={showInfo} toggleShowInfo={toggleShowInfo} {...props} />
  )
}

export default Map