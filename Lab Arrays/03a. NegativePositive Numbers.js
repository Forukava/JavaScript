const actionsMap = {
    true: 'unshift',
    false: 'push'
}

function solve(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[actionsMap[arr[i]<0]](arr[i])
    }
return result;
}
console.log(solve([7, -2, 8, 9]))