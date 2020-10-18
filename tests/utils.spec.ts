import { flatten, set } from '../src/utils'

describe('utils', () => {
  describe('flatten util', () => {
    it('returns an one level object with . delimited keys', () => {
      const source = { one: { two: { three: 'value' } }, foo: 'value2' }

      const result = flatten(source)

      expect(result).toEqual({
        'one.two.three': 'value',
        foo: 'value2',
      })
    })

    it('allows for a custom delimiter to separate the keys', () => {
      const source = { one: { two: { three: 'value' } }, foo: 'value2' }

      const result = flatten(source, '/')

      expect(result).toEqual({
        'one/two/three': 'value',
        foo: 'value2',
      })
    })
  })

  describe('set util', () => {
    it('modifies source object with value in the provided path', () => {
      const source = { state: 'Florida', city: 'Miami', age: 23 }

      set(source, 'age', 30)
      expect(source.age).toEqual(30)
    })

    it('modifies source object when provided path is . delimited string', () => {
      const source = { state: 'Florida', city: 'Miami', user: { details: { age: 23 } } }

      set(source, 'user.details.age', 30)
      expect(source.user.details.age).toEqual(30)
    })
  })
})
