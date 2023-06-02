export function firstLetterUppercase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);;
}


export function concatWords(word1, word2) {
  return  word1 + word2;
}

export function findFirstIndexOfLetter(word, letter) {
  return word.indexOf(letter);
}

export function replaceCharacter(word, letterToReplace, replacement="w") {
  return word.replace(new RegExp(letterToReplace, "g"), replacement);// moi cette ligne de code stp 
}

export function sentenceToArrayOfWords(sentence) {
  return sentence.split(' ');
}

export function countWords(sentence) {
  
  return sentence.split(' ').length;
 } 


