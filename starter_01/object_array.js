export function test () {
  // Pour tester le tests
  return 'hello';
}

export function objectValues () {
  const obj = {}
  return obj
}

export function objectToArrayKeys () {
  const obj = {
    name: 'Marie',
    age: 23
  }
 
 const tab = Object.keys(obj);
  return tab;
}

export function objectToArrayKeys2 () {
  const obj = {
    name: 'Marie',
    age: 23
  }
  const tab = Object.keys(obj).map((key) => {
    return [key, obj[key]];
  }).flat();

  return tab;
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
  return `Je m'appelle ${arr[0]} et j'ai ${arr[1]} ans`;
}
