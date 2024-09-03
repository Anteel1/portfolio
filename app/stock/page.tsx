"use client";
import React, { useEffect, useRef, useState } from 'react'
async function StockPage(data:any) {
  const [vnIndex,setVnIndex] = useState<any>()
  useEffect(() =>{
    const getVnIndexData = async () =>{
        // const data = await fetch('/api/stock',{
        //     method:'GET'
        // })
        // console.log(data)
      }
      getVnIndexData()
  })
  
  return (
    <div className="">
        {vnIndex}
    </div>
  )
    
}

export default StockPage
