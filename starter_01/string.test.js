import {
  firstLetterUppercase,
  concatWords,
  findFirstIndexOfLetter,
  replaceCharacter,
  sentenceToArrayOfWords,
  countWords
} from './string'

describe('String tests', () => {
  it('Ça doit retourner le string seulement avec la 1ère lettre du mot en majuscule', () => {
    const words = ['hello', 'bye', 'yvens']
    const uppercaseWords = ['Hello', 'Bye', 'Yvens']
    words.forEach((word, idx) => {
      expect(firstLetterUppercase(word)).toBe(uppercaseWords[idx])
    })
  })
  it('Ça doit retourner le strig fusionner', () => {
    const word1 = 'hello'
    const word2 = 'world'
    expect(concatWords(word1, word2)).toBe('helloworld')
  })

  it("Ça doit retourner l'index de la 1ère lettre correspondante", () => {
    const uppercaseWords = [
      { word: 'Hello', letter: 'l' },
      { word: 'Bye', letter: 'y' },
      { word: 'Yvens', letter: 'n' }
    ]
    const indexes = [2, 1, 3]
    uppercaseWords.forEach((wordObj, idx) => {
      expect(findFirstIndexOfLetter(wordObj.word, wordObj.letter)).toBe(
        indexes[idx]
      )
    })
  })
  it('Ça doit retourner remplacer le charactère selectionner par un autre', () => {
    const words = [
      { word: 'Hello', letter: 'l' },
      { word: 'Bye', letter: 'y' },
      { word: 'Yvens', letter: 'v' }
    ]
    const wordsReplaced = ['Hewwo', 'Bwe', 'Ywens']
    words.forEach((wordObj, idx) => {
      expect(replaceCharacter(wordObj.word, wordObj.letter, 'w')).toBe(
        wordsReplaced[idx]
      )
    })
  })
  
  it("Ça doit transformer la phrase en tableau de mots", () => {
    const sentence = "Bonjour à tous";
    expect(sentenceToArrayOfWords(sentence)).toStrictEqual(["Bonjour", "à", "tous"]);
  });

  it("Ça doit compter le nombre de mots dans la phrase", () => {
    const sentence = "Bonjour Marcos";
    expect(countWords(sentence)).toBe(2);
  })
})
