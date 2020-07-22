import React from 'react'
import useTimes from './lib/useTimes'
import Timer from './components/Timer'
import Timetable from './components/Timetable'

function App() {
  const { times, addTime, clearTimes } = useTimes('3x3')

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
        <Timetable times={times} />
        <button onClick={clearTimes}>clear times</button>
      </main>
    </div>
  )
}

export default App
