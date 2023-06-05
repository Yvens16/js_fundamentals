import { sumArray, numberOfProperties, stringReversal } from './problem'

describe('Des problèmes un peu plus compliqué', () => {
  it('Ça devrait prendre un tableau avec des chiffres et retourner un tableau dont chaque nombre est la somme de lui même + le chiffre avant lui', () => {
    expect(sumArray([1, 2, 3, 4])).toStrictlyEqual([1, 4, 6, 8])
  })
  it("Ça devrait prendre un objet et compter le nombre de propriétés que l'objet possède", () => {
    const object = { name: 'Yvens', age: 23, surname: 'Belaston' }
    expect(numberOfProperties(object)).toBe(3)
  })

  it("Ça devrait prendre un string et le retourner le string avec l'ordre des lettres inversées", () => {
    expect(stringReversal('Hello')).toBe('olleH')
  })
})
