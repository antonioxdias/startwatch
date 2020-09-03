import React, { useState, useEffect, useCallback } from 'react'
import { timeDisplay } from '../lib/utils'

const startTimeout = 1000

const Timer = ({ saveTime }: { saveTime: (time: number) => void }) => {
  const [counterInterval, setCounterInterval] = useState<NodeJS.Timeout | null>(null)
  const [time, setTime] = useState(0)
  const [timeoutRunning, setTimeoutRunning] = useState(false)
  const [canStart, setCanStart] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const start = () => {
    setTime(0)
    setIsActive(true)
  }
  const stop = useCallback((time: number) => {
    setIsActive(false)
    setCanStart(false)

    saveTime(time)
  }, [saveTime])
  const reset = useCallback((time: number) => {
    if (isActive) stop(time)
    setTime(0)
  }, [isActive, stop])

  useEffect(() => {
    if (isActive && counterInterval && time >= 3600000) { // 1h in centiseconds
      clearInterval(counterInterval)
      setCounterInterval(null)
      stop(time)
    }

    if (isActive && !counterInterval && time === 0) {
      const start = Date.now()
      setCounterInterval(setInterval(() => setTime(Date.now() - start), 1))
    } else if (!isActive && time !== 0 && counterInterval) {
      clearInterval(counterInterval)
      setCounterInterval(null)
    }
    return () => {
      if (counterInterval && !isActive) {
        clearInterval(counterInterval)
        setCounterInterval(null)
      }
    }
  }, [isActive, stop, counterInterval, time])

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
        reset(time)
      }
    }

    const onKeyUp = (ev: KeyboardEvent) => {
      // space -> start/stop
      if (ev.keyCode === 32) {
        setTimeoutRunning(false)
        if (timeout) clearTimeout(timeout)
        if (isActive && time !== 0) stop(time)
        if (!isActive && canStart) start()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [timeoutRunning, canStart, isActive, time, reset, stop])

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
          fontSize: 'min(calc(100vw * 0.15), 140px)',
          fontFamily: 'monospace, monospace',
          letterSpacing: '-0.5rem',
          margin: 0
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
