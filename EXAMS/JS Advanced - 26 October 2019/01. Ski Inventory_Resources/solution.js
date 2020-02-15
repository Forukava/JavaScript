function solve() {
   let itemInput = document.querySelectorAll('#add-new input');
   let addBtn = document.querySelector('#add-new button');
   let productsList = document.querySelector('#myProducts ul')

   addBtn.addEventListener('click', addItemHendler)

   function addItemHendler(e){
      e.preventDefault()
      let newItemLine = document.createElement('li')
      
      let itemName = document.createElement('span')
      itemName.innerText = itemInput[0].value
      
      let itemQuantity = document.createElement('strong')
      itemQuantity.innerText = itemInput[1].value

      newItemLine.appendChild(itemName)
      newItemLine.appendChild(itemQuantity)

      let priceContainer = document.createElement('div')
      
      let priceElements = document.createElement('strong')
      priceElements.innerText = itemInput[2].value
      
      let addButton = document.createElement('button')
      addButton.innerText="Add to Client's list"

      priceContainer.appendChild(priceElements)
      priceContainer.appendChild(addButton)

      newItemLine.appendChild(priceContainer)

      productsList.appendChild(newItemLine )
   }
}