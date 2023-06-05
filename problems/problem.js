export function sumArray (array) {
  let resultat = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      resultat.push(array[i]);
    } else {
      resultat.push(array[i] + array[i - 1]);
    }
  }
  return resultat;
}

export function numberOfProperties (object) {
  let nombreProprietes = 0;

  for (let propriete in object) {
    if (object.hasOwnProperty(propriete)) {
      nombreProprietes++;
    }
}
  return nombreProprietes;
}

export function stringReversal (string) {
  let chaineInverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    chaineInverse += string.charAt(i);
  }

  return chaineInverse;
}
