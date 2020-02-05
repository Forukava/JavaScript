function addItem() {
    const $elements = {
        inputText: document.querySelector("#newItemText"),
        inputValue: document.querySelector("#newItemValue"),
        selectMenu: document.querySelector("#menu")
    }
    const option = document.createElement('option');
    option.textContent = $elements.inputText.value;
    option.value = $elements.inputValue.value;

    $elements.selectMenu.appendChild(option)

    $elements.inputText.value = ''
    $elements.inputValue.value = ''
}