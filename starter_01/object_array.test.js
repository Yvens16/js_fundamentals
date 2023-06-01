import {
  test,
  objectValues,
  objectToArrayKeys,
  objectToArrayKeys2,
  pushInArray,
  objectToString,
  arrayToString,
} from './object_array';


describe('First batch', () => {
  it('Changez la valeur de renvoie de la fonction test dans le fichier pour voir le test passer au vert', () => {
    expect(test()).toBe('bye')
  })

  it.only('Ça doit renvoyer un objet avec un name égal à Marie et un âge égal à 23', () => {
    expect(objectValues()).toEqual(
      expect.objectContaining({ name: 'Marie', age: 23 })
    )
  })
  it('Ça doit renvoyer un tableau du type [clé, clé]', () => {
    expect(objectToArrayKeys()).toEqual(['name', 'age'])
  })

  it.only('Ça doit renvoyer un tableau du type [clé, valeur, clé, valeur]', () => {
    console.log('objectToArrayKeys2():', objectToArrayKeys2())
    expect(objectToArrayKeys2()).toEqual(['name', 'Marie', 'age', 23])
  })

  it('Ça doit renvoyer le tableau [1,2,3,4]', () => {
    expect(pushInArray()).toEqual([1, 2, 3, 4])
  })
  it('Ça doit renvoyer le tableau string compléter', () => {
    expect(objectToString()).toEqual("Je m'appelle Marie et j'ai 23 ans")
  })

  it('Ça doit renvoyer le tableau string compléter avec les éléments du tableau', () => {
    expect(arrayToString()).toEqual("Je m'appelle Marie et j'ai 23 ans")
  })
})
