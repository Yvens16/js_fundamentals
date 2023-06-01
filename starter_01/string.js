export function firstLetterUppercase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);;
}


export function concatWords(word1, word2) {
  // example: word1 = hello, word2 = world => helloworld
  return  word1 + word2;
}

export function findFirstIndexOfLetter(word, letter) {
  return word.indexOf(letter);
}

export function replaceCharacter(word, letterToReplace, replacement="w") {
  return word.replace(new RegExp(letterToReplace, "g"), replacement);
}

export function sentenceToArrayOfWords(sentence) {
  return sentence.split(' ');
}

export function countWords(sentence) {
  return sentenceToArrayOfWords(sentence).length; //il s'agit d'un appel de fonction à l'intérieur d'une autre fonction pour compter le nombre de mots dans la phrase  
}