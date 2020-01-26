function sort(input, arg){
    let result = input.sort((a,b)=> arg === 'asc' ?  a-b : b-a)
        console.log(result)

    
}
sort([14, 7, 17, 6, 8], 'asc')