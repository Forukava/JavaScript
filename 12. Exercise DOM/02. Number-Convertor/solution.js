function solve() {
let option = document.querySelectorAll('#selectMenuTo')[0];
let button = document.querySelector('button')
let input = document.querySelector('#input')

option.innerHTML = 
`<option selected value = ''></option>
<option value = 'hexadecimal'>Hexadecimal</option>
<option value = 'binary'>Binary</option>`

button.addEventListener('click', () =>{
    
    console.log(input.value)
    console.log(option.value, '<=select')
    let result 
    if(option.value === 'binary'){
        result = (Number(input.value)).toString(2)
    }else{
        result = (Number(input.value)).toString(16).toUpperCase()
    }
    document.getElementById('result').value = result
})
}