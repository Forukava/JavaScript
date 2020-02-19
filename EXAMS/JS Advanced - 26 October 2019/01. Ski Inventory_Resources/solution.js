function solve() {
   let priceSoFar = 0
   let itemInput = document.querySelectorAll('#add-new input');
   let addBtn = document.querySelector('#add-new button');
   let availableProductList = document.querySelector('#products ul')
   let myProductsList = document.querySelector('#myProducts ul')
   let filterInput = document.querySelector('#filter')
   let filtertrigger = document.querySelector('.filter button')
   let totalPriceRef = document.querySelectorAll('h1')

   addBtn.addEventListener('click', addItemHendler)
   filtertrigger.addEventListener('click', filterItems)
   availableProductList.addEventListener('click', addProductToBasketHandler)
   
   function addProductToBasketHandler(e){
      if(e.target.tagName === 'BUTTON'){
         let productPrice = e.target.parentNode.querySelector('strong').textContent
         let productName = e.target.parentNode.parentNode.querySelector('span').textContent
         let basketElement = document.createElement('li')
         basketElement.innerText = productName
         let productQuantityCountRef = e.target.parentNode.parentNode.querySelector('strong')

         let basketElementProductPrice = document.createElement('strong')
         basketElementProductPrice.innerText = productPrice
         basketElement.appendChild(basketElementProductPrice)
         myProductsList.appendChild(basketElement)
         priceSoFar += Number(productPrice)
         totalPriceRef[1].innerHTML = `Total Price: ${(priceSoFar + Number(productPrice)).toFixed(2)}`
      }
   }

   function filterItems(){
      let filterValue = filtertrigger.value;
      Array.from(availableProductList.children).forEach(element => {
          
          if(productName.innerText.includes(filterValue)){
             element.getElementsByClassName.display = 'block'
          }else{
             element.getElementsByClassName.display = 'block'
          }
       });
   }
   function addItemHendler(e){
      e.preventDefault()
      let newItemLine = document.createElement('li')

      let itemName = document.createElement('span')
      itemName.innerText = itemInput[0].value
      
      let itemQuantity = document.createElement('strong')
      itemQuantity.innerText = `Available : ${itemInput[1].value}`

      let priceContainer = document.createElement('div')
      
      let priceElements = document.createElement('strong')
      priceElements.innerText = itemInput[2].value
      
      let addButton = document.createElement('button')
      addButton.innerText="Add to Client's list"

      newItemLine.appendChild(itemName)
      newItemLine.appendChild(itemQuantity)
      priceContainer.appendChild(priceElements)
      priceContainer.appendChild(addButton)
      newItemLine.appendChild(priceContainer)
      availableProductList.appendChild(newItemLine)

      

     
   }
}