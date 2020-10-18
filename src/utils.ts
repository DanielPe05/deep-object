export const isArray = value => Array.isArray(value)

export const isBuffer = value => Buffer.isBuffer(value)

export const isString = value => typeof value === 'string'

export const hasKeys = value => !!Object.keys(value).length

export const isObject = value => Object.prototype.toString.call(value) === '[object Object]'

export const isValidObject = (value: {}): boolean => {
  if (!value) {
    return false
  }
  return !isArray(value) && !isBuffer(value) && isObject(value) && hasKeys(value)
}

export const flatten = (object: Object, separator: string = '.'): Object => {
  const traverse = (child: {}, path: string[] = []): Object => {
    return Object.assign(
      {},
      ...Object.entries(child).map(([key, value]) =>
        isValidObject(value)
          ? traverse(value, [...path, key])
          : { [path.concat([key]).join(separator)]: value }
      )
    )
  }

  return Object.assign({}, traverse(object))
}

export const set = (obj, path, value) => {
  let i
  path = path.split('.')

  for (i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]]
  }

  obj[path[i]] = value
}

