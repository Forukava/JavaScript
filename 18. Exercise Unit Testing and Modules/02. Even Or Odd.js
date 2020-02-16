let isOddOrEven = require('./test')
let assert = require('chai').assert

describe('isOddOrEven() behaivor', () =>{
    it('check the type of the input - Number case',() => {
let result = isOddOrEven(12)
assert.equal(result, undefined, 'The resul is not undefined')
    })
    
})