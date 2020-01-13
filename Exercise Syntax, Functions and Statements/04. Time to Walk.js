function solve(steps, foot, speed){
let walkM = steps * foot
let walkKM= walkM / 1000
let minutes = parseInt(walkM/500)
let totalSeconds = walkKM/speed * 3600 + minutes * 60
let hoursWalked = parseInt(totalSeconds/3600)


let minutesWalked = parseInt(totalSeconds/60)
let secoundsWalked = totalSeconds % 60
let finalOutput = ''
 if(hoursWalked<10){
     finalOutput+=`0${hoursWalked.toFixed(0)}`
 }else{
     finalOutput+=`:${hoursWalked.toFixed(0)}`
 }
 if(minutesWalked<10){
    finalOutput+=`:0${minutesWalked.toFixed(0)}`
}else{
    finalOutput+=`:${minutesWalked.toFixed(0)}`
}
 if(secoundsWalked<10){
     finalOutput+=`:0${secoundsWalked.toFixed(0)}`
 }else{
     finalOutput+=`:${secoundsWalked.toFixed(0)}`
 }
console.log(finalOutput)
}  

solve(4000, 0.60, 5)