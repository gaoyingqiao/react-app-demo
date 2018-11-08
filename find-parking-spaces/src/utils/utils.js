/* eslint-disable */
export function setPxtoRem(px) {
  if (typeof px === 'number' || typeof px === 'string') {
    const globalUnit = 375 / 10;
    return `${parseFloat(px) / globalUnit}rem`;
  }
}

export function checkNested(obj, ...args) {
  let tObj = obj;
  for (let i = 0; i < args.length; i += 1) {
    if (!tObj || !Object.hasOwnProperty.call(tObj, args[i])) {
      return false;
    }
    tObj = tObj[args[i]];
  }
  return true;
}