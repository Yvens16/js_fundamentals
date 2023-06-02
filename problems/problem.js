export function sumArray (array) {
  function sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Le paramètre doit être un tableau.");
    }
  
    if (arr.length < 2) {
      return arr;
    }
  
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result.push(arr[i]);
      } else {
        const sum = arr[i] + arr[i - 1];
        result.push(sum);
      }
    }
  
    return result;
  }

}

export function numberOfProperties (object) {
  if (typeof object !== "object" || object === null) {
    throw new Error("Le paramètre doit être un objet.");
  }

  return Object.keys(object).length;
}
  

export function stringReversal (string) {
  if (typeof string !== "string") {
    throw new Error("Le paramètre doit être une chaîne de caractères.");
  }

  return string.split("").reverse().join("");
}