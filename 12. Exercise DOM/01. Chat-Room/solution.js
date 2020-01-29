function solve() {
    let sendButton = document.getElementById('send');
    let input = document.getElementById('chat_input');
    let messafeField = document.getElementById('chat_messages')
    
    sendButton.addEventListener('click', (e) =>{

      let newElement = document.createElement('div')
      newElement.innerHTML = input.value;
      newElement.classList.add('message', 'my-message') 

      messafeField.appendChild(newElement)
      input.value = ''
    })
}


