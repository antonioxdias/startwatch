import React, { useState } from 'react'
import { Puzzle, timeDisplay } from './lib/utils'
import useTimes from './lib/useTimes'
import useScramble from './lib/useScramble'
import Timer from './components/Timer'
import Timetable from './components/Timetable'

function App() {
  const [puzzle, setPuzzle] = useState(Puzzle.Three)
  const {
    times,
    addTime,
    clearTimes,
    average
  } = useTimes(puzzle)
  const { scramble } = useScramble(puzzle, times)

  return (
    <div
      style={{
          backgroundColor: '#282c34',
          minHeight: '100vh',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white',
      }}
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 1200,
          margin: 'auto'
        }}
      >
        <p>{ puzzle }</p>
        <p>{ scramble }</p>
        <Timer saveTime={addTime} />
        <div
          style={{
            display: 'flex'
          }}
        >
          <Timetable times={times} />
          <div>
            <p>
              avg5: { average.of5 ? timeDisplay(average.of5) : '---' }
            </p>
            <p>
              avg12: { average.of12 ? timeDisplay(average.of12) : '---' }
            </p>
            <button onClick={clearTimes}>clear times</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
