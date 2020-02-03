function solve() {
    let inputField = document.getElementsByTagName("input")[0];
    let addBtn = document.getElementsByTagName("button")[0];
    let orderListElement = document.getElementsByTagName("ol")[0];
    let listDB = orderListElement.getElementsByTagName("li");
 
    addBtn.addEventListener('click', function () {
        let nameToAdd = inputField.value;
        let letterNumber = alphabetList[nameToAdd[0].toLowerCase()];
 
        let letterArr = listDB[letterNumber].textContent
            .split(', ')
            .filter(a => a !== '');
 
            letterArr.push(nameToAdd[0].toUpperCase() + nameToAdd.substr(1).toLowerCase())
           
            if (letterArr.length > 1) {
                listDB[letterNumber].textContent = letterArr.join(', ');
            } else {
                listDB[letterNumber].textContent = letterArr[0];
               
            }
           
            inputField.value = '';
 
    })
 
    let alphabetList = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    }
}