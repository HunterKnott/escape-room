'use client';

import React from 'react';
import { useState } from 'react';

export default function PuzzleBox({ key1Acquired, handlePuzzleBoxSubmit }) {
    const [isOpen, setIsOpen] = useState(false); // In case user submits again
    const [isActive, setIsActive] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleClick = async () => {
      setIsActive(!isActive);
    }

    const handleChange = (e) => {
      setUserInput(e.target.value);
    }

    const handleTryClick = () => {
      handlePuzzleBoxSubmit(userInput);
    }

    return (
      <>
        <button onClick={handleClick}>
          <img
            className="absolute w-[105px] h-[70px] top-[382px] left-[820px] "
            src="https://s3-alpha-sig.figma.com/img/f820/6942/d9e955461097a01e632db2a9f6ac96d6?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oIUwF7LQsKTNKyJTbMRSKBueNRkJUjOBBBPvFUWQZw5Rpgd5EzYfduIr7gQCblnucLpDOH70CPZEIYnnMLIufgu4RgUF9fx-HSuW9z8d3AORARq1BFmyJ254B0wxoGeDBMczhOBJnm2hOFgl-g0xLLPv7LcRiKxTGDIk93h-gVgjB4nfQ3KDK2dH9dapzcz~CY37DC8Rjmtrt4LywtSvHjXhvnGOXTA3GqMuSKz2XjOyn7I4Od4HF-fk2-vV2s6cIa97h619TcjHENDMYcZZAHq9KN1SlG9icUVnvPVEKyVkAlL~vPn-K4Is557m7dDtRAv7P1Yw5WEGtLiEIrLxDQ__"
            alt="Puzzle Box"
            />
        </button>
        {isActive && (
          <div className="fixed bottom-0 right-0 bg-gray-200 p-4 rounded shadow z-10">
            <h3 className="font-bold">This puzzle box takes 3 letters.</h3>
            <div className='flex items-center'>
              <input
                type="text"
                className="mr-2 border border-gray-300 rounded px-2 py-1"
                value={userInput}
                onChange={handleChange}
                maxLength={3}
              />
              <button onClick={handleTryClick} className="rounded-full px-4 py-2 bg-green-500 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
                Try
              </button>
            </div>
          </div>
        )}
      </>
      
    )
}