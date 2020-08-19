import React from 'react'
import useTimes from './lib/useTimes'
import Timer from './components/Timer'
import Timetable from './components/Timetable'
import { timeDisplay } from './lib/utils'

function App() {
  const {
    times,
    addTime,
    clearTimes,
    average
  } = useTimes('3x3')

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
