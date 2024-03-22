"use client" //remove use client if you want to see the GOD 
import React, { useState, useEffect } from 'react'


export default function ConditionRendering() {
    const [isEvenNumber, setisEvenNumber] = useState<boolean>(false)
    const [numberEvenOrOdd, setnumberEvenOrOdd] = useState<number>(2) // update this number to anything and check the output

    //checing if number if even
    const isNumberEven = () => {
        setisEvenNumber(numberEvenOrOdd % 2 === 0)
    }

    // just using it to run of page load
    useEffect(() => {
        isNumberEven()
    }, [])


    return (
        <div className='container m-auto'>

            <h1 className="text-5xl font-mediun">If-else</h1>
            <div className="mt-5">
                {
                    //checking condition (if)
                    isEvenNumber ? (
                        <div className='text-[green] text-2xl'>Yes {numberEvenOrOdd}, am even number</div>
                    )
                        // else
                        : (
                            <div className='text-[red] text-2xl'>So sad {numberEvenOrOdd}, am not even number</div>
                        )

                }
            </div>

<div className="mt-14">
<h1 className="text-5xl font-medium">If : This will show only if number is even</h1>
            <div className="mt-5">
                {
                    //checking condition (if)
                    isEvenNumber && (
                        <div className='text-[green] text-2xl'>Yes {numberEvenOrOdd}, am even number</div>
                    )
                       
                }
            </div>
</div>
           


        </div>
    )
}