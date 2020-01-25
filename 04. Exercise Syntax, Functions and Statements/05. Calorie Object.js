function solve(arr){
let obj = {}
for (let i = 0; i < arr.length; i += 2) {
    
    let element = arr[i]
    let value = Number(arr[i + 1])
    obj[element] = value
    }
    console.log(obj)
}
let boo = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52]
solve(boo)