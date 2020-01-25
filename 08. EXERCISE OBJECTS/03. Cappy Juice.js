function juice(input){
 let parseinput = {};
 let juice = {};

 for (let i = 0; i < input.length; i++) {
   let tempParse = input[i].split(' => ')
   if(parseinput[tempParse[0]]){
       parseinput[tempParse[0]] = parseinput[tempParse[0]] + Number(tempParse[1])
   }else{
   parseinput[tempParse[0]]=Number(tempParse[1])
 }
 let bottle = Math.floor(parseinput[tempParse[0]] /1000)
 if(bottle > 0){
     juice[tempParse[0]] = bottle
 }
}
    let final = Object.entries(juice);
    for (let i = 0; i < final.length; i++) {
        console.log(final[i].join(' => '))
        
    }
}
console.log(juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
))