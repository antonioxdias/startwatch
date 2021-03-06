import { useState, useEffect } from 'react'
import Scrambo from 'scrambo' 
import { Puzzle } from './utils'

const scr = new Scrambo()

const setScramboType = (scr: Scrambo, puzzle: Puzzle) => {
  switch (puzzle) {
    case Puzzle.Two:
      scr.type('222')
      break
    case Puzzle.Three:
      scr.type('333')
      break
    case Puzzle.Four:
      scr.type('444')
      break
    case Puzzle.Five:
      scr.type('555')
      break
    case Puzzle.Six:
      scr.type('666')
      break
    case Puzzle.Seven:
      scr.type('777')
      break
    case Puzzle.Clock:
      scr.type('clock')
      break
    case Puzzle.Mega:
      scr.type('minx')
      break
    case Puzzle.Pyra:
      scr.type('pyram')
      break
    case Puzzle.SQ1:
      scr.type('sq1')
      break
    case Puzzle.Skewb:
      scr.type('skewb')
      break
    default:
      break
  }
}

const useScramble = (puzzle: Puzzle, times: number[]) => {
  const [scramble, setScramble] = useState(scr.get(1))

  // new scramble when puzzle changes
  useEffect(() => {
    setScramboType(scr, puzzle)
    setScramble(scr.get(1))
  }, [puzzle])
  // new scramble when times changes
  useEffect(() => setScramble(scr.get(1)), [times])

  return {
    scramble
  }
}

export default useScramble
