import React from 'react'
import { useState, useEffect } from 'react'
import {Slider} from './Slider'
import { Content } from './Content'

export const App = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/sliders')
      .then(response => response.json())
      .then(json => setData(json))
  },[])

  return (
    <div>
      <Slider slides = {data}/>
      <Content/>
    </div>
  )
}
