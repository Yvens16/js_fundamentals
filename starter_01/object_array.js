export function test () {
  // Pour tester le tests

  return 'bye';
}

export function objectValues () {
  const obj = {
    name:"Marie",
    age : 23
  }
  return obj
}

export function objectToArrayKeys () {
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
  return [Object.keys(obj)[0], obj.name, Object.keys(obj)[1], obj.age]
}

export function pushInArray () {
  const arr = [1, 2, 3];
  arr.push(4);
  return arr
}

export function objectToString () {
  // Il faut utiliser les propriétés de l'objet ici et les template string
  const obj = {
    name: 'Marie',
    age: 23
  }
  return `Je m'appelle ${obj.name} et j'ai ${obj.age} ans`
}


export function arrayToString () {
  // Il faut utiliser les éléments du tableau ici et les template string
  const arr = ["Marie", 23];
  return `Je m'appelle ${arr[0]} et j'ai ${arr[1]} ans`
}
