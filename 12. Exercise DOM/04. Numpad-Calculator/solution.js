function solve() {
    let pad = document.getElementsByClassName('keys')[0];
    let output = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');
    let clearButton = document.getElementsByClassName('clear')[0];

    let operators = ['+', '-', '/', '*']

    clearButton.addEventListener('click', () =>{
        output.innerHTML = '';
        result.innerHTML = '';
    })

    pad.addEventListener('click',({target: {value}})=>{
       if(!value){
           return
       }
       if(operators.includes(value)){
       output.innerHTML = output.innerHTML + `${value}`
           return
    } 
        output.innerHTML = output.innerHTML + value 
        console.log(value)
})   
}