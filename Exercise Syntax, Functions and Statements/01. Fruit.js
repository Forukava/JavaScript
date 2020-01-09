function market(fruit, weight, price){
let weightkg = weight/1000
let finalPrice = weightkg * price
console.log(`I need $ ${finalPrice} to buy ${weightkg} kilograms ${fruit}.`)
}
market('orange', 2500, 1.80)