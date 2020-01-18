function solve(arr){
    let bet = arr.toUpercase()
    bet.sort((a, b) => a.length - b.length);
      console.log(bet.join('\n'))
};


solve(['alpha', 'beta', 'gamma'])