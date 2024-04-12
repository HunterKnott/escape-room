'use client';

import React from 'react';
import { useState } from 'react';
import Light from '../app/components/Light';
import PuzzleBox from '../app/components/PuzzleBox';
import Key1 from '../app/components/Key1';
import Bottle from './components/Bottle';
import ScrewDriver from './components/ScrewDriver';
import Key2 from './components/Key2';
import Cabinet from './components/Cabinet';
import Rug from './components/Rug';
import Dirt from './components/Dirt';
import Chair from './components/Chair';
import Table from './components/Table';
import Painting from './components/Painting';
import Clock from './components/Clock';
import Safe from './components/Safe';
import Door from './components/Door';

export default function Home() {
  const [key1Acquired, setKey1Acquired] = useState(false);
  const [bottleAcquired, setBottleAcquired] = useState(false);
  const [screwDriverAcquired, setScrewDriverAcquired] = useState(false);
  const [chairOnTable, setChairOnTable] = useState(false);
  const [hintRevealed, setHintRevealed] = useState(false);
  const [key2Acquired, setKey2Acquired] = useState(false);

  const handlePuzzleBoxSubmit = (userInput) => {
    const trimmedInput = userInput.trim();
    if (trimmedInput.toUpperCase() === 'RUN') {
      alert("The Box opened, there's a key inside.");
      setKey1Acquired(true);
    } else {
      alert("That wasn't right.");
    }
  }

  const handleSafeSubmit = (userInput) => {
    const trimmedInput = userInput.trim();
    if (trimmedInput === "0407") {
      alert("The safe opened, there's another key inside.");
      setKey2Acquired(true);
    } else {
      alert("That wasn't right.")
    }
  }

  const handleBottleAcquired = () => {
    setBottleAcquired(true);
  }

  const handleScrewDriverAcquired = () => {
    setScrewDriverAcquired(true);
  }

  const handleChairOnTable = () => {
    setChairOnTable(true);
  }

  const handleHintRevealed = () => {
    setHintRevealed(true);
  }

  return (
    <main className="h-screen bg-cover bg-center relative">
      <div className="absolute w-1/6 h-full bg-yellow-900 text-white flex flex-col p-4 z-10">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-xl font-bold mr-4">Tools</h1>
          <Key1
            key1Acquired={key1Acquired}
          />
          <Bottle
            bottleAcquired={bottleAcquired}
          />
          <ScrewDriver
            screwDriverAcquired={screwDriverAcquired}
          />
          <Key2
            key2Acquired={key2Acquired}
          />
        </div>
        <div className="border-t-2 mt-14 flex flex-col items-center">
          <h1 className="text-xl font-bold mr-4">Hint</h1>
          {hintRevealed && (
            <h2 className='text-center'>The answer was given to you 2 hours ago</h2>
          )}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="w-full h-full absolute inset-0"
          src="https://s3-alpha-sig.figma.com/img/350e/fdbb/c9a0e6063610c3255894e237ec3ee752?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9kpaMs5lkLIEh9OgbvyJKaNwKeruA~2yl8pxI-PaoPWHDiTwfcAssy-jSDHACakAwOuJ1qhzOXAM-1jNbqygMom1uncEY4MhdxD5~M8gCsmBkdlBOaZWPMt3KE3yOwoYP-oJOwvYyWPNFI4ZoQoHnctBUMSeT82AMzBl6BdJOdt8gCow942PCK-iMTO3bNZm40AnJGh7n4uTzaJrFn7ArOxhvwK~JQSatjZbNC8FVWJRq6~xqR0Ms4S0djhbaaLIs0VcJBQnVzi7FrO32DmhKP6YzqsKay4PIGgLPMRnw~2lQ6qA-A2nTh0oZ86nC3Z9lKmgaP0paC2V6VqP2~-SA__"
          alt="Room"
        />

        <Door
          key2Acquired={key2Acquired}
        />
        <Safe
          key2Acquired={key2Acquired}
          handleSafeSubmit={handleSafeSubmit}
        />
        <Clock />
        <Rug />
        <Light />
        <Table />
        <PuzzleBox
          key1Acquired={key1Acquired}
          handlePuzzleBoxSubmit={handlePuzzleBoxSubmit}
        />
        <Cabinet
          key1Acquired={key1Acquired}
          setBottleAcquired={handleBottleAcquired}
        />
        <Chair
          screwDriverAcquired={screwDriverAcquired}
          chairOnTable={chairOnTable}
          setChairOnTable={handleChairOnTable}
        />
        <Dirt
          bottleAcquired={bottleAcquired}
          setScrewDriverAcquired={handleScrewDriverAcquired}
        />
        <Painting
          chairOnTable={chairOnTable}
          hintRevealed={hintRevealed}
          setHintRevealed={handleHintRevealed}
        />
      </div>
    </main>
  );
}