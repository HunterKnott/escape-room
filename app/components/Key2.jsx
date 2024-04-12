import React from 'react';

export default function Key2({ key2Acquired }) {
    return (
        key2Acquired ? (
            <img 
                className="w-full shadow-sm aspect-[2.94] max-w-[120px]"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfad96bca2353cdafe4217c776698926b2661c56bcbee03f4921ea153e8b7071?apiKey=083cff44761149f29de8a214fde171e4&"
                alt="Key"
            />
        ) : null
    )
}