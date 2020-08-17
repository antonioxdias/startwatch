import { useState, useEffect } from 'react'

const getTimesForPuzzle = (puzzle: string) => {
  const item = localStorage.getItem(puzzle)
  if (!item) return []

  return item.split(';').map(time => parseInt(time))
}

const saveTimesForPuzzle = (puzzle: string, times: number[]) => {
  localStorage.setItem(puzzle, times.join(';'))
}

const calcAvg5 = (times: number[]) => {
  if (times.length < 5) return null

  // keep only last 5 results
  const ts = times.slice(times.length - 5)
  // remove best time
  const maxIndex = ts.indexOf(Math.max(...ts))
  delete ts[maxIndex]
  // remove worst time
  const minIndex = ts.indexOf(Math.min(...ts))
  delete ts[minIndex]

  return ts.reduce((sum, current) => sum + current) / 3
}

const useTimes = (puzzle: string) => {
  const [times, setTimes] = useState<number[]>(getTimesForPuzzle(puzzle) || [])
  const [avg5, setAvg5] = useState<number | null>(calcAvg5(times))

  useEffect(() => saveTimesForPuzzle(puzzle, times), [times, puzzle])
  useEffect(() => setAvg5(calcAvg5(times)), [times])

  return {
    times,
    addTime: (time: number) => setTimes(times => [...times, time]),
    clearTimes: () => setTimes([]),
    avg5
  }
}

export default useTimes