function solve(one, two, three){
if(one>two && one>three){
    console.log(`The largest number is ${one}.`)
}else if(two>one && two>three){
    console.log(`The largest number is ${two}.`)
}else if(three>one && three>two){
    console.log(`The largest number is ${three}.`)
}
}
solve(5, -3, 16)
