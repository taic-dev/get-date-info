type initialType = {
  y: number;
  m: number;
  d: number;
  h: number;
  i: number;
  s: number;
  w: number;
  ms: number;
}

const date = new Date();

export const initialObj: initialType = {
  y: date.getFullYear(),
  m: date.getMonth(),
  d: date.getDate(),
  h: date.getHours(),
  i: date.getMinutes(),
  s: date.getSeconds(),
  w: date.getDay(),
  ms: date.getMilliseconds(),
}