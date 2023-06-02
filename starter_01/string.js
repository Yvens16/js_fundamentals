export function firstLetterUppercase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);  
}

export function concatWords(word1, word2) {
  // example: word1 = hello, word2 = world => helloworld
  return (word1 + word2);
}

export function findFirstIndexOfLetter(word, letter) {
  return word.indexOf(letter[0]);
}

export function replaceCharacter(word, letterToReplace, replacement = "w") {
  return word.replace(new RegExp(letterToReplace, "gi"), replacement);
}

export function sentenceToArrayOfWords(sentence) {
  return sentence.split([" "]);
}

export function countWords(sentence) {
  const words = sentence.split(" ");
  return words.length;
}