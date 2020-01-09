function market(fruit, weight, price){
let weightkg = weight/1000
let finalPrice = weightkg * price
console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightkg.toFixed(2)} kilograms ${fruit}.`)
}
market('orange', 2500, 1.80)