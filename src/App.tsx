import React from 'react'
import useTimes from './lib/useTimes'
import { timeDisplay } from './lib/utils'
import Timer from './components/Timer'

import './App.css'

function App() {
  const { times, addTime } = useTimes('3x3')

  return (
    <div className="App">
      <Timer saveTime={addTime} />
      {
        times.map(time => <span>{timeDisplay(time)}</span>)
      }
    </div>
  )
}

export default App
