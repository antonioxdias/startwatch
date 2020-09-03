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
    <main
      style={{
        display: 'grid',
        gridTemplateRows: '120px 30% 1fr',
        placeItems: 'center',
        backgroundColor: '#282c34',
        height: '100vh',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
      }}
    >
      <div>
        <select
          value={puzzle}
          onChange={ev => setPuzzle(ev.target.value as Puzzle)}
        >
          {Object.values(Puzzle).map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <p>{scramble}</p>
      </div>
      <Timer saveTime={addTime} />
      <div
        style={{
          display: 'flex'
        }}
      >
        <Timetable times={times} />
        <div>
          <p>
            avg5: {average.of5 ? timeDisplay(average.of5) : '---'}
          </p>
          <p>
            avg12: {average.of12 ? timeDisplay(average.of12) : '---'}
          </p>
          <button onClick={clearTimes}>clear times</button>
        </div>
      </div>
    </main>
  )
}

export default App
