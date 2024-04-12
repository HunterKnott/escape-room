'use client';

import React from 'react';
import { useState } from 'react';

export default function Light() {
    const [lightOn, setLightOn] = useState(false);
    const [lightDisabled, setLightDisabled] = useState(false);

    // R: . __ .
    // U: . . __
    // N: __ .

    const handleClick = async () => {
        setLightDisabled(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        setLightOn(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        setLightOn(false);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        setLightOn(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        setLightOn(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(false);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLightOn(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        setLightOn(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        setLightOn(false);
        setLightDisabled(false);
    }
    
    return (
      <div className="absolute w-[48px] h-[48px] top-[164px] left-[922px]">
        <button onClick={handleClick}>
          <div className="absolute bg-yellow-900 rounded-full w-[48px] h-[48px] top-[0px] left-[0px]" />
        </button>
        <button>
          <div className={`absolute bg-yellow-400 rounded-full w-[40px] h-[40px] top-[4px] left-[4px] ${lightOn ? '' : 'hidden'}`}/>
        </button>
        <button>
          <div className={`absolute bg-white rounded-full transform rotate-27 transform-origin-top-left w-[16px] h-[8px] top-[7.76px] left-[28.74px] ${lightOn ? '' : 'hidden'}`} /> 
        </button>
      </div>
      )
}