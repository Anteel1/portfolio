"use client";
import Image from 'next/image'
import {Header, HomeLayout , Footer} from './core'
import React, { useEffect, useRef, useState } from 'react'
export default async function Home() {
  // const weatherData : Promise<weatherReponse> = await weatherService()
  return (
    <main>
      <div className="" style={{display:'flex',width:'100%'}}>
        <div style={{minWidth:20}}></div>
        <div style={{flex:1}}>
        <Header />
          <div style={{marginTop:104}} className="">
            <HomeLayout />
          </div>
            <Footer />
        </div>
        <div style={{minWidth:20}}></div>
        </div>
    </main>
  )
}

const dataWeather = {
  location: {
    name: 'Ho Chi Minh City',
    region: '',
    country: 'Vietnam',
    lat: 10.76,
    lon: 106.66,
    tz_id: 'Asia/Ho_Chi_Minh',
    localtime_epoch: 1702544196,
    localtime: '2023-12-14 15:56'
  },
  current: {
    last_updated_epoch: 1702543500,
    last_updated: '2023-12-14 15:45',
    temp_c: 35,
    temp_f: 95,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 160,
    wind_dir: 'SSE',
    pressure_mb: 1009,
    pressure_in: 29.8,
    precip_mm: 0,
    precip_in: 0,
    humidity: 44,
    cloud: 50,
    feelslike_c: 38.7,
    feelslike_f: 101.6,
    vis_km: 10,
    vis_miles: 6,
    uv: 8,
    gust_mph: 16.3,
    gust_kph: 26.3
  }
}