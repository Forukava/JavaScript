function solve(x,y){
while(y){
let z = y
y = x % y
x = z
}
return x
}
console.log(solve(15,5))