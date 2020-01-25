function solve(arr){
let number = Number(arr.shift())
let operations = {
    chop: (x) => {return (x/2)},
    dice: (x) => {return (Math.sqrt(x))},
    spice: x => {return ++x},
    bake: x => {return x*=3},
    fillet: x => {return x *=0.8} 
}
for (let index = 0; index < arr.length; index++) {
   number = operations[arr[index]](number);
    console.log(number)
}
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])