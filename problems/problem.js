export function sumArray (array) {
 const sumArray = [];
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if(i===0){
      sumArray.push(array[i])
    }else{
      sumArray.push(array[i]+array[i-1]);
    }
    
  }

  return sumArray;
}

  


export function numberOfProperties (object) {
 return Object.keys(object).length;
}

export function stringReversal (string) {
 return string.split('').reverse().join('');
}