"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import img_1 from './../image/img_1.webp'
import img_2 from './../image/img_2.webp'

const slides = [img_1, img_2]

export default function Carrosel(){
    const [atual,setAtual] = useState(0)
    
    const prev = ()=> setAtual(atual === 0 ? slides.length -1: atual -1) 
    const next = ()=> setAtual(atual === slides.length -1 ? 0 : atual +1)
    
    return(
        <div className='max-w-lg'>
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={{transform: `translatex(-${atual * 100}%)`}}>
                    {slides.map((s, i)=>(
                        <Image key={i} src={s} alt=''/>
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>{'<'}</button>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>{'>'}</button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((_,i)=>(
                            <div key={i} onClick={()=> setAtual(i)} className={`transition-all w-3 h-3 bg-green-700 rounded-full ${atual === i ? "p-2" : "bg-opacity-50"}`}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}