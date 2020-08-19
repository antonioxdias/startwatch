import { useState, useEffect } from 'react'
import Scrambo from 'scrambo' 
import { Puzzle } from './utils'

const scr = new Scrambo()

const setScramboType = (scr: Scrambo, puzzle: Puzzle) => {
  switch (puzzle) {
    case Puzzle.Three:
      scr.type('333')
      break
    default:
      break
  }
}

const useScramble = (puzzle: Puzzle, times: number[]) => {
  setScramboType(scr, puzzle)
  const [scramble, setScramble] = useState(scr.get(1))

  useEffect(() => setScramboType(scr, puzzle), [puzzle])
  useEffect(() => setScramble(scr.get(1)), [times])

  return {
    scramble
  }
}

export default useScramble
