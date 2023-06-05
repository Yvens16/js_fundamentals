export function sumArray (array) {
  return array.map((num, index) => {
    if(index === 0) {
      return num;
    } else {
      return num + array[index - 1];
    }
    })
}

export function numberOfProperties (object) {
  return Object.keys(object).length
}

export function stringReversal (string) {
  return string.split("").reverse().join("");
}
