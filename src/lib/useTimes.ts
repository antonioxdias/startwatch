import { useState, useEffect } from 'react'

interface Average {
  of5: number | null
  of12: number | null
  of100: number | null
  allTime: number | null
}

const getTimesForPuzzle = (puzzle: string) => {
  const item = localStorage.getItem(puzzle)
  if (!item) return []

  return item.split(';').map(time => parseInt(time))
}

const saveTimesForPuzzle = (puzzle: string, times: number[]) => {
  localStorage.setItem(puzzle, times.join(';'))
}

const calcAvgOf = (times: number[], ofNumber: number) => {
  if (times.length < ofNumber) return null

  // keep only last 5 results
  const ts = times.slice(times.length - ofNumber)
  // remove best time
  const maxIndex = ts.indexOf(Math.max(...ts))
  ts.splice(maxIndex, 1)
  // remove worst time
  const minIndex = ts.indexOf(Math.min(...ts))
  ts.splice(minIndex, 1)

  return ts.reduce((sum, current) => sum + current) / (ofNumber - 2)
}

const calcAvgAllTime = (times: number[]) => {
  if (!times.length) return null
  return times.reduce((sum, current) => sum + current) / times.length
}

const calcAverages = (times: number[]) => {
  return {
    of5: calcAvgOf(times, 5),
    of12: calcAvgOf(times, 12),
    of100: calcAvgOf(times, 100),
    allTime: calcAvgAllTime(times)
  } as Average
}

const useTimes = (puzzle: string) => {
  const [times, setTimes] = useState<number[]>(getTimesForPuzzle(puzzle) || [])
  const [average, setAverage] = useState<Average>(calcAverages(times))

  useEffect(() => setTimes(getTimesForPuzzle(puzzle)), [puzzle])
  useEffect(() => saveTimesForPuzzle(puzzle, times), [times, puzzle])
  useEffect(() => setAverage(calcAverages(times)), [times])

  return {
    times,
    addTime: (time: number) => setTimes(times => [...times, time]),
    clearTimes: () => setTimes([]),
    average
  }
}

export default useTimes