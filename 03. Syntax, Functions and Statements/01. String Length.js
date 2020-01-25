function solve(arr1, arr2, arr3){
let a1 = arr1.length
let a2 = arr2.length
let a3 = arr3.length

let sum = a1 + a2 + a3
let final = Math.floor(sum / 3) 
console.log(sum)
console.log(final)
}
solve('chocolate', 'ice cream', 'cake')