function lockedProfile() {
    const buttons = document.querySelectorAll("#main > div > button");
  [...buttons]
  .forEach((button) => {
      button.addEventListener('click', (event) => {
           const divSibling = event.currentTarget.parentNode.children[9]
           divSibling.style.display = 'block'
           console.log(divSibling.id)
      })
  });
} 