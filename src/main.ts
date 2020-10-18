import { isArray, isObject, isString, flatten, set } from './utils'

export const lowerCaseValues = (payload: Object, keysToSkip: string[] = []) => {
  const flatSource = flatten(payload)
  const transformedObj = lowerCase(payload)
  keysToSkip.forEach(path => set(transformedObj, path, flatSource[path]))

  return transformedObj
}

const lowerCase = (payload: Object) =>
  Object.entries(payload).reduce((updated, [key, value]) => {
    if (isArray(value)) {
      updated[key] = value.map(val => lowerCase(val))
      return updated
    }

    if (isObject(value)) {
      updated[key] = lowerCase(value)
      return updated
    }

    updated[key] = isString(value) ? value.toLowerCase() : value

    return updated
  }, {})
