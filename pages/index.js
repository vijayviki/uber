import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpdmlrYXMiLCJhIjoiY2wwdzNnZ2ltMWRkbzNicGt2dGxvN3VrZyJ9.E0bG3xyHTREs4btixglMkQ";

export default function Home() {
  useEffect(()=>{
   const map = new mapboxgl.Map({
     container: "map",
     styles: "mapbox://styles/branaust/ckah0ufz017b71jrsp5pm2w0d",
     center:[77.2759,15.7642],
     zoom:18,
   })

  },[])

  return (
    <Wrapper>
    <Map id="map"></Map>
    <ActionItems></ActionItems>
    </Wrapper>
  );
}

const Wrapper=tw.div`flex flex-col bg-red-300 h-screen`

const Map=tw.div`bg-red-500 flex-1`

const ActionItems=tw.div`flex-1`