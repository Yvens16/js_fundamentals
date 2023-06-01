export function test () {
  // Pour tester le tests
  console.log("Yvens @@@@@@@@@@@@@@@@@@@@@@")
  return 'hello';
}

export function objectValues () {
  const obj = {};

  return obj;
}

export function objectToArrayKeys () {
  const obj = {
    name: 'Marie',
    age: 23
  }
  return []
}

export function objectToArrayKeys2 () {
  const obj = {
    name: 'Marie',
    age: 23
  }
  return []
}

export function pushInArray () {
  const arr = [1, 2, 3]
  return arr
}

export function objectToString () {
  // Il faut utiliser les propriétés de l'objet ici et les template string
  const obj = {
    name: 'Marie',
    age: 23
  }
  return "Je m'appelle [name] et j'ai [age] ans"
}


export function arrayToString () {
  // Il faut utiliser les éléments du tableau ici et les template string
  const arr = ["Marie", 23];
  return "Je m'appelle [name] et j'ai [age] ans"
}
