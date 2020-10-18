# Object Touch

A set of small tools for deeply manipulating and working with objects.

## Installation

```bash
npm i -S object-touch
```

## Usage

### `lowerCaseValues`

Allows to lowercase all values at all levels of the source object. Returns a new object.

| Params   | Required | Desc                                                                                                               |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| source   | yes      | The source object that will be modified                                                                            |
| skipKeys | no       | A list of keys to ignore when lowercasing values. Nested keys can be provided by passing a dot (.) delimited path. |

```javascript
import { lowerCaseValues } from 'object-touch'

const src = { a: { b: { c: 'Foo' } } }

lowerCaseValues(src)

// { a: { b: { c: 'foo' } } }
```

With `skipKeys`:

```javascript
import { lowerCaseValues } from 'object-touch'

const src = { a: { b: { c: 'Foo' } }, d: 'Bar', e: 'Wiz' }

lowerCaseValues(src, ['a.b.c', 'e'])

// { a: { b: { c: 'Foo' } }, d: 'bar', e: 'Wiz' }
```

### `lowerCaseKeys`

Allows to lowercase all keys at all levels of the source object. Returns a new object.

| Params | Required | Desc                                    |
| ------ | -------- | --------------------------------------- |
| source | yes      | The source object that will be modified |

```javascript
import { lowerCaseKeys } from 'object-touch'

const src = { A: { B: { C: 'Foo' } } }

lowerCaseKeys(src)

// { a: { b: { c: 'foo' } } }
```
