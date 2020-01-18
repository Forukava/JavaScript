function solve(input){
let isMagicMatrix = true
let firstRowSum = input[0].reduce((a,b)=> a+b,0)

for (let row = 0; row < input.length -1; row++){
    let rowSum = input[row].reduce((a,b)=> a+b,0)
    let rowSum2 = input[row+1].reduce((a,b)=>a+b,0)
    let colSum2 = 0;
    let colSum = 0;

    for (let col = 0; col < input[row].length; col++) {
        colSum += input[row][col]
        colSum2 += input[row + 1] [col]
        }
        if(rowSum !== rowSum2 || colSum !== colSum2){
            isMagicMatrix = false;
            break;
        }
    }
    console.log(isMagicMatrix)
}
solve([4,5,6],
      [6,5,4],
      [5,5,5])