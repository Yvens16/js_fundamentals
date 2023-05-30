export function test () {
  // Pour tester le tests
  return 'hello';
}

export function objectValues () {
  const obj = {
  name: "Marie",
  age: 23
  }
  return obj
}

export function objectToArray () {
  const obj = {
    name: 'Marie',
    age: 23
  }
  return Object.keys(obj) 
}

export function objectToArrayKeys2 () {
  const obj = {
    name: 'Marie',
    age: 23
  }
  return ["name",obj.name,"age",obj.age]
}

export function pushInArray () {
  const arr = [1, 2, 3]
  arr.push(4)
  return arr
}

export function objectToString () {
  // Il faut utiliser les propriétés de l'objet ici et les template string
  const obj = {
    name: 'Marie',
    age: 23
  }
  return "Je m'appelle  et j'ai  ans"
}


export function arrayToString () {
  // Il faut utiliser les éléments du tableau ici et les template string
  const arr = ["Marie", 23];
  return "Je m'appelle  et j'ai  ans"
}
