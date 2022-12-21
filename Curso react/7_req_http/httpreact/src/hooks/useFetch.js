import { useState, useEffect } from "react";

//  4 - costum hook
//hook é basicamente uma função

export const useFetch = (url) =>{
  const [data,setData] = useState(null)

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch(url)
      const json = await res.json()
      setData(json)

    }

    fetchData()
  },[url])
  //dados que vai utilizar no hook
  return {data}
}