export function sumArray (array) {
    const newArray = [];
for(let i=0; i<array.length; i++){
  if(i===0){
    newArray[i]=array[i]; 
  }else{
  newArray[i]=array[i]+array[i-1];
  }
}

return newArray;
}

export function numberOfProperties (object) {
  
return ((Object.keys(object)).length);
}

export function stringReversal (string) {
  const arrayString = [];
  arrayString = string.split("");
  return arrayString.reversed;
} 
/*impossible de lire le test lance que le premier*/
