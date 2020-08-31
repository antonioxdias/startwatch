export enum Puzzle {
  Two = "2x2x2",
  Three = "3x3x3",
  Four = "4x4x4",
  Five = "5x5x5",
  Six = "6x6x6",
  Seven = "7x7x7",
  Clock = "Clock",
  Mega = "Megaminx",
  Pyra = "Pyraminx",
  SQ1 = "Square-1",
  Skewb = "Skewb"
}

const pad = (num: number, z: number = 2) => ('00' + num).slice(-z)

export const timeDisplay = (time: number, simple: boolean = false) => {
  let s = time
  const ms = s % 1000
  s = (s - ms) / 1000
  const secs = s % 60
  s = (s - secs) / 60
  const mins = s % 60

  if (simple && mins === 0) return pad(secs) + '.' + pad(ms, 3)
  return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3)
}
