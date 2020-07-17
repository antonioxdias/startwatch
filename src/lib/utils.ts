const pad = (num: number, z: number = 2) => ('00' + num).slice(-z)

export const timeDisplay = (time: number) => {
  let s = time
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;

  return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3)
}
