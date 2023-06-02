export function sumArray(array) {
  const result = [];
  const initial = 0;
  array.reduce((sum, current) =>
    result.push(sum + current), initial);
  return result;
}

export function numberOfProperties(object) {
  return Object.entries(object).length;
}

export function stringReversal(string) {
  return string.split('').reverse().join('');
}
