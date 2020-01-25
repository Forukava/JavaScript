function solve(num){
    let arrayofNumber =  String(num).split('')
    let isSame = true
    let firstElement =  arrayofNumber[0]

    arrayofNumber.forEach(function(element){
if(element != firstElement){
    isSame = false
}
})
    let sum = arrayofNumber
    .map(Number)
    .reduce((acc,cur) => acc + (cur))
    console.log(isSame)
    console.log(sum)
}
solve(222222)