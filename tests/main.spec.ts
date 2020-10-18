import { lowerCaseValues } from '../src/main'

describe('lowerCaseValues util', () => {
  it('lowercase all string values in a given object', () => {
    const control = { state: 'Florida', city: 'Miami', age: 23 }
    const expected = { state: 'florida', city: 'miami', age: 23 }
    expect(lowerCaseValues(control)).toEqual(expected)
  })

  it('lowercase all string values in a given nested object', () => {
    const control = {
      age: 23,
      name: { first: 'John', last: 'Doe' },
    }
    const expected = {
      age: 23,
      name: { first: 'john', last: 'doe' },
    }
    expect(lowerCaseValues(control)).toEqual(expected)
  })

  it('lowercase all array values in a given nested object', () => {
    const control = {
      names: [{ first: 'John', last: 'Doe' }],
    }
    const expected = {
      names: [{ first: 'john', last: 'doe' }],
    }
    expect(lowerCaseValues(control)).toEqual(expected)
  })

  it('does not lowercase values when the key is passed as an exception', () => {
    const control = {
      age: 23,
      city: 'MIAMI',
      name: 'Daniel',
    }
    const expected = {
      age: 23,
      city: 'MIAMI',
      name: 'daniel',
    }
    expect(lowerCaseValues(control, ['city'])).toEqual(expected)
  })

  it('accepts ignore keys nested keys as using . notation', () => {
    const control = {
      name: 'Daniel',
      foo: {
        bar: 'Wiz',
      },
    }
    const expected = {
      name: 'daniel',
      foo: {
        bar: 'Wiz',
      },
    }
    expect(lowerCaseValues(control, ['foo.bar'])).toEqual(expected)
  })
})
