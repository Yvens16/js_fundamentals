export function firstLetterUppercase(word) {
  let firstLetter = word.slice(0,1).toUpperCase();
  let restLetter = word.slice(1);
  return firstLetter+restLetter;
}


export function concatWords(word1, word2) {
  // example: word1 = hello, word2 = world => helloworld
  return `${word1}${word2}`;
}

export function findFirstIndexOfLetter(word, letter) {
  return word.indexOf(letter);
}

export function replaceCharacter(word, letterToReplace, replacement="w") {
  let newWord;
  newWord = word.replaceAll(letterToReplace,replacement);
  console.log(newWord);
  return newWord;
}

export function sentenceToArrayOfWords(sentence) {
  const sentenceArray = sentence.split(" ");
  return sentenceArray;
}

export function countWords(sentence) {
  const sentenceArray = sentence.split(" ");
  return sentenceArray.length;
}