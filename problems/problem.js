export function sumArray(array) {
  if (array.length < 1){
    return []
  }
let result = [];
for(let i = 0; i < array.length; i++){
  i === 0
  ? result.push(array[i])
  : result.push(array[i] + array[i-1])
}
return result;
} //////
//pour cet exercice, j'ai tenté de modifier le test car il semblerait que la description ne corresponde pas au résultat attendu
//voir les commentaires dans le test


export function numberOfProperties (object) {
  return Object.keys(object).length;
}

export function stringReversal (string) {
  return string.length < 1
    ? '' 
    : string.split('').reverse().join('');
}
