export function firstLetterUppercase(word) {
return word.substring(0, 1).toUpperCase() + word.substring(1);
}


export function concatWords(word1, word2) {
  // example: word1 = hello, word2 = world => helloworld
  let word = word1 + word2;
  return word;
}

export function findFirstIndexOfLetter(word, letter) {
  word = word.toLowerCase();
  letter = letter.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      return i;
    }
  }
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