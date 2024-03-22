"use client" //remove use client if you want to see the GOD 
import React, { useState } from 'react'


export default function ConditionRendering() {
    const [evenNumber,setEvenNumber] = useState<number>(2) // update this number to anything and check the output
    //checing if number if even
    const isNumberEven = (number : number) : boolean => {
      return number % 2 === 0;
    }
  return (
    <div className='container m-auto'>
        <h1 className="text-5xl">Only If</h1>
    </div>
  )
}