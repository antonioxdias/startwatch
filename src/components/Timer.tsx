import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const start = () => setIsActive(true)
  const stop = () => setIsActive(false)
  const reset = () => {
    if (isActive) setIsActive(false)
    setTime(0)
  }

  const pad = (num: number, z: number = 2) => ('00' + num).slice(-z)
  const timeDisplay = () => {
    let s = time
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
  
    return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive && interval && time >= 3600000) { // 1h in centiseconds
      clearInterval(interval)
      stop()
    }

    if (isActive) {
      const start = Date.now()
      interval = setInterval(() => {
        setTime(time => Date.now() - start)
      }, 1)
    } else if (!isActive && time !== 0 && interval) {
      clearInterval(interval)
    }
    return () => { interval && clearInterval(interval) }
  }, [isActive])

  useEffect(() => {
    const onKeyUp = (ev: KeyboardEvent) => {
      // space -> start/stop
      console.log(isActive)
      if (ev.keyCode === 32) {
        if (isActive) stop()
        if (!isActive) start()
      }

      // r, R -> reset
      if (ev.keyCode === 82) {
        reset()
      }
    }
    document.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  }, [isActive])

  return (
    <div
    >
      <h1
        style={{
          color: 'wheat',
          fontSize: 128,
          fontFamily: 'monospace, monospace',
          letterSpacing: '-0.5rem'
        }}
      >
        { timeDisplay() }
      </h1>
      {
        isActive ? (
          <button onClick={stop} >
            stop
          </button>
        ) : (
          <button onClick={start} >
            start
          </button>
        )
      }
      <button onClick={reset} >
        reset
      </button>
    </div>
  )
}

export default Timer 
