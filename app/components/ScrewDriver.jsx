import React from 'react';

export default function ScrewDriver({ screwDriverAcquired }) {
    return (
        screwDriverAcquired ? (
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e8d66bdf35e9e36a383cb3cb0971ce7c13408c2a6605db01e68a6f206e9e613?apiKey=083cff44761149f29de8a214fde171e4&"
                className="w-full aspect-[1.82] max-w-[120px]"
                alt="Screw Driver"
            />
        ) : null
    )
}