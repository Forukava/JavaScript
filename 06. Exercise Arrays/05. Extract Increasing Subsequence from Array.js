function solve(input){

       let output = input.reduce((acc,curr) => {
            const last = acc[acc.length -1]

            if(curr >= last || last === undefined)
            acc.push(curr)
            return acc
        }, [])
        console.log(output.join('\n'))
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])