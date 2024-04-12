'use client';

import React from 'react';
import { useState } from 'react';

export default function Safe({ key2Acquired, handleSafeSubmit }) {
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
        handleSafeSubmit(userInput);
    }

    return (
        <>
            <button onClick={handleClick}>
                <img
                    className="absolute w-[80px] h-[80px] top-[280px] left-[580px]"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99ecdb39bbbbd39727296e500ab6dc9f10a29a352473f8f6a1c2fda6bc3bb8a8?apiKey=083cff44761149f29de8a214fde171e4&"
                    alt="Safe"
                />
            </button>
            {isActive && (
                <div className="fixed bottom-0 right-0 bg-gray-200 p-4 rounded shadow z-10">
                    <h3 className="font-bold">This safe takes 4 numbers.</h3>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            className="mr-2 border border-gray-300 rounded px-2 py-1"
                            value={userInput}
                            onChange={handleChange}
                            maxLength={4}
                        />
                        <button onClick={handleTryClick}>
                            Try
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}