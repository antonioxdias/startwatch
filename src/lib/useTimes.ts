import { useState, useEffect } from 'react'

const getTimesForPuzzle = (puzzle: string) => {
  const item = localStorage.getItem(puzzle)
  if (!item) return []

  return item.split(';').map(time => parseInt(time))
}

const saveTimesForPuzzle = (puzzle: string, times: number[]) => {
  localStorage.setItem(puzzle, times.join(';'))
}

const useTimes = (puzzle: string) => {
  const [times, setTimes] = useState<number[]>(getTimesForPuzzle(puzzle) || [])

  useEffect(() => saveTimesForPuzzle(puzzle, times), [times])

  return {
    times,
    addTime: (time: number) => setTimes(times => [...times, time])
  }
}

export default useTimes