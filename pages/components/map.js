import React from 'react'
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";

import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpdmlrYXMiLCJhIjoiY2wwdzNnZ2ltMWRkbzNicGt2dGxvN3VrZyJ9.E0bG3xyHTREs4btixglMkQ";

function Map() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [77.532745,12.971940 ],
      zoom: 10,
    });
  }, []);

  return (
    <Maps id="map">map</Maps>
  )
}

const Maps = tw.div`
bg-red-500 flex-1
`;

export default Map