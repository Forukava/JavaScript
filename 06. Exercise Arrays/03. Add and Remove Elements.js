function solve(input){
    let arr = []
    for (let i = 0; i < input.length; i++) {
        let current = input[i]
        if(current === 'add'){
            arr.push(i + 1)
        }else if(current === 'remove')
            arr.pop()
        }
        console.log(arr.length > 0 ? arr.join('\n'): 'Empty')
    }


solve(['remove', 
'remove', 
'remove']
)