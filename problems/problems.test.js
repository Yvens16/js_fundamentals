import { sumArray, numberOfProperties, stringReversal } from './problem'

describe('Des problèmes un peu plus compliqué', () => {
  it('Ça devrait prendre un tableau avec des chiffres et retourner un tableau dont chaque nombre est la somme de lui même + le chiffre avant lui', () => {
    expect(sumArray([1, 2, 3, 4])).toStrictEqual([1, 3, 5, 7]) //j'ai modifié les valeurs car si je comprends bien la description, on devrait avoir 1, 3, 5, 7 et non 1, 4, 6, 8
  })                                                              //[somme de 1 + 0, somme de 2 + 1, somme de 3 + 2, somme de 4 + 3]
                                                                  //Et il semblerait que la méthode toStrictlyEqual n'existe pas, j'ai donc utilisé toStrictEqual (https://jestjs.io/fr/docs/expect#tostrictequalvalue)
                                                                
  it("Ça devrait prendre un objet et compter le nombre de propriétés que l'objet possède", () => {
    const object = { name: 'Yvens', age: 23, surname: 'Belaston' }
    expect(numberOfProperties(object)).toBe(3)
  })

  it("Ça devrait prendre un string et le retourner le string avec l'ordre des lettres inversées", () => {
    expect(stringReversal('Hello')).toBe('olleH')
  })
})
