function create(words) {
   for (let word of words) {
       let div = document.createElement('div');
       let paragraph = document.createElement('p');
       paragraph.textContent = word;
       div.appendChild(paragraph);

       let contentDiv = document.getElementById('content');
       contentDiv.appendChild(div);
   }
}