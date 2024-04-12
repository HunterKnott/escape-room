import React from 'react';

export default function Page() {
    return (
        <main className="bg-green-200 h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">You made it out!</h1>
                <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
            </div>
        </main>
    );
}