import React, { useState, useEffect } from 'react'
import { timeDisplay } from '../lib/utils'

const startTimeout = 1000

const Timer = ({ saveTime }: { saveTime: (time: number) => void }) => {
  const [time, setTime] = useState(0)
  const [timeoutRunning, setTimeoutRunning] = useState(false)
  const [canStart, setCanStart] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const start = () => setIsActive(true)
  const stop = () => {
    setIsActive(false)
    setCanStart(false)

    saveTime(time)
  }
  const reset = () => {
    if (isActive) stop()
    setTime(0)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive && interval && time >= 3600000) { // 1h in centiseconds
      clearInterval(interval)
      stop()
    }

    if (isActive) {
      const start = Date.now()
      interval = setInterval(() => setTime(Date.now() - start), 1)
    } else if (!isActive && time !== 0 && interval) {
      clearInterval(interval)
    }
    return () => { interval && clearInterval(interval) }
  }, [isActive])

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null
    const onKeyDown = (ev: KeyboardEvent) => {
      // space -> start countdown to start
      if (ev.keyCode === 32 && !timeoutRunning && !isActive) {
        setCanStart(false)
        setTimeoutRunning(true)
        timeout = setTimeout(() => {
          setCanStart(true)
        }, startTimeout)
      }

      // r, R -> reset
      if (ev.keyCode === 82) {
        reset()
      }
    }

    const onKeyUp = (ev: KeyboardEvent) => {
      // space -> start/stop
      if (ev.keyCode === 32) {
        setTimeoutRunning(false)
        if (timeout) clearTimeout(timeout)
        if (isActive && time !== 0) stop()
        if (!isActive && canStart) start()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [timeoutRunning, canStart, isActive, time])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <TimeoutIndicator timeoutRunning={timeoutRunning} canStart={canStart} isActive={isActive} />
      <h1
        style={{
          color: 'wheat',
          fontSize: 128,
          fontFamily: 'monospace, monospace',
          letterSpacing: '-0.5rem'
        }}
      >
        { timeDisplay(time) }
      </h1>
      <TimeoutIndicator timeoutRunning={timeoutRunning} canStart={canStart} isActive={isActive} />
    </div>
  )
}

const TimeoutIndicator = ({ timeoutRunning, canStart, isActive }: {
  timeoutRunning: boolean;
  canStart: boolean;
  isActive: boolean;
}) => {
  let backgroundColor = 'transparent'
  let borderColor = 'transparent'
  if (!canStart && timeoutRunning && !isActive) {
    backgroundColor = 'darkred'
    borderColor = 'red'
  }
  if (canStart && timeoutRunning && !isActive) {
    backgroundColor = 'limegreen'
    borderColor = 'green'
  }

  return (
    <div
      style={{
        height: '2rem',
        width: '2rem',
        margin: '1rem',
        backgroundColor,
        borderRadius: '50%',
        border: `solid 2px ${borderColor}`
      }}
    />
  )
}

export default Timer 
