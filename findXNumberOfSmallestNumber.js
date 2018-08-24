const x = process.argv[2]

// random length of array (between 10 - 30) with be generated, set here for longer array
const a1L = getRandomInt(10, 30)
const a2L = getRandomInt(10, 30)

let a1 = []
let a2 = []

// generate sample data, set here for wider range
for (let i=0 ; i<a1L ; i++) a1.push(getRandomInt(5, 100))
for (let i=0 ; i<a2L ; i++) a2.push(getRandomInt(5, 100))

a1 = sort(a1)
a2 = sort(a2)

console.log('random generated sorted array 1: ', a1)
console.log('random generated sorted array 2: ', a2)
console.log('result: ', mainFindXNumberOfSmallest(a1, a2, x))

function mainFindXNumberOfSmallest(a1, a2, x) {

  const output = []
  // i: array 1 iterator
  // j: array 2 iterator
  // k: output length, break loop condition
  for (let i=0, j=0, k=0 ; k<x ; k++) {
    const curA1 = a1[i]
    const curA2 = a2[j]
    if (curA1<curA2) {
      output.push(curA1)
      i++
    } else {
      output.push(curA2)
      j++
    }
  }
  return output
}

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max-min));
}

function sort(numberArray, ascending = true) {
  if (numberArray.length < 1) throw new Error('Illegal Argument, empty array')
  numberArray.sort((a, b) => {
    return ascending ? a-b : b-a
  })
  return numberArray
}
