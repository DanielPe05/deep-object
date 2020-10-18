import { isArray, isObject, isString, flatten, set, isValidObject } from './utils'

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

export const lowerCaseKeys = obj => {
  if (!isValidObject(obj)) {
    return obj
  }

  const keys = Object.keys(obj)
  let n = keys.length
  let modifiedKey: string

  while (n--) {
    let key = keys[n]
    modifiedKey = key.toLowerCase()
    if (key === modifiedKey) {
      continue
    }

    obj[modifiedKey] = lowerCaseKeys(obj[key])
    delete obj[key]
  }

  return obj
}
