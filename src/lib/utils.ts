const pad = (num: number, z: number = 2) => ('00' + num).slice(-z)

export const timeDisplay = (time: number, simple: boolean = false) => {
  let s = time
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;

  if (simple && mins === 0) return pad(secs) + '.' + pad(ms, 3)
  return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3)
}
