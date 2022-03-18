import Head from "next/head";
import tw from "tailwind-styled-components";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpdmlrYXMiLCJhIjoiY2wwdzNnZ2ltMWRkbzNicGt2dGxvN3VrZyJ9.E0bG3xyHTREs4btixglMkQ";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.2759, 15.6319],
      zoom: 10,
    });
  }, []);
  return (
    <Wrapper>
      <Map id="map">map</Map>
      <ActionItems>start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`;
const Map = tw.div`
bg-red-500 flex-1
`;

const ActionItems = tw.div`
flex-1
`;
