export function sumArray (array) {
 return array.map((number, index) => {
    if (index === 0) {
      return number;
    }
    return number + array[index - 1];
  });

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