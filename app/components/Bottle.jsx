import React from 'react';

export default function Bottle({ bottleAcquired }) {
    return (
        bottleAcquired ? (
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a0272b3fef465cc8a9a0ca73a93c47bfb6318a22a320ca53397a09ceb06964?apiKey=083cff44761149f29de8a214fde171e4&"
                className="w-full aspect-[0.36] max-w-[40px]"
                alt="Bottle"
            />
        ) : null
    )
}