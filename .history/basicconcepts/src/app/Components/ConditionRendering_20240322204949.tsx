import React, { useState } from 'react'


export default function ConditionRendering() {
    const [evenNumber,setEvenNumber] = useState<number>(2) // update this number to anything and check the output
    //checing if number if even
    const isNumberEven = () => {
      return  evenNumber => evenNumber % 2 === 0;
    }
  return (
    <div className='container m-auto'>
        <h1 className="text-5xl">Only If</h1>
    </div>
  )
}