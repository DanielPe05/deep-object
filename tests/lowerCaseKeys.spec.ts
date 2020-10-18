import { lowerCaseKeys } from '../src/main'

describe('lowerCaseKeys util', () => {
  it('lowercase all keys in a given object', () => {
    const control = { State: 'Florida', City: 'Miami', Age: 23 }
    const expected = { state: 'Florida', city: 'Miami', age: 23 }
    expect(lowerCaseKeys(control)).toEqual(expected)
  })

  it('lowercase all keys in a given nested object', () => {
    const control = {
      Age: 23,
      Name: { First: 'John', Last: 'Doe' },
    }
    const expected = {
      age: 23,
      name: { first: 'John', last: 'Doe' },
    }
    expect(lowerCaseKeys(control)).toEqual(expected)
  })

  it('ignores keys that are already lowercased', () => {
    const control = {
      age: 23,
      Name: { First: 'John', Last: 'Doe' },
    }
    const expected = {
      age: 23,
      name: { first: 'John', last: 'Doe' },
    }
    expect(lowerCaseKeys(control)).toEqual(expected)
  })

})
