function add(a: number, b: number) {
  return a + b
}

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b
  cb(result)
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

printResult(add(5, 12))

// let someValue: undefined
// console.log(someValue)

let combineValues: (num: number, num2: number) => number

combineValues = add
//combineValues = 5
//combineValues = printResult

console.log(combineValues(8, 8))

addAndHandle(10, 20, result => {
  console.log(result)
})
