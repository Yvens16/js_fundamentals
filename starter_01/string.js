export function firstLetterUppercase(word) {
  return word = word[0].toUpperCase() + word.slice(1);
}


export function concatWords(word1, word2) {
  return word1 + word2;
}

export function findFirstIndexOfLetter(word, letter) {
  return word.indexOf(letter);
}

export function replaceCharacter(word, letterToReplace, replacement="w") {
  return word.replaceAll(letterToReplace, replacement);
}

export function sentenceToArrayOfWords(sentence) {
  return sentence.split(" ");
}

export function countWords(sentence) {
  return sentence.split(" ").length;
}