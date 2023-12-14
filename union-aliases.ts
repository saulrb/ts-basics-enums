type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(n1: Combinable, n2: Combinable, resultConversion: ConversionDescriptor) {
  let result
  if (typeof n1 === 'number' && typeof n2 === 'number' && resultConversion === 'as-number') {
    result = +n1 + +n2
  } else {
    result = n1.toString() + n2.toString()
  }

  return result
}

const combineAges = combine(30, 26, 'as-number')
console.log(combineAges)

console.log(combine('Max', 'Anna', 'as-text'))

const combineStringsAges = combine('30', '26', 'as-number')
console.log(combineAges)

const combineStringsAsStringAges = combine('30', '26', 'as-text')
console.log(combineAges)
