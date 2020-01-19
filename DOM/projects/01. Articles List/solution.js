function createArticle() {
	let article = document.createElement('article')
	let h3 = document.createElement('h3')
	let p = document.createElement('p')

	let input = document.getElementById('createTitle')
	let textarea = document.getElementById('createContent')
	let articles = document.getElementById('articles')

	if(input === null || textarea === null || articles === null){
		throw new Error('Something is wrong...')
	}

	h3.innerHTML = input.value;
	 p.innerHTML = textarea.value;

	 article.appendChild(h3)
	 article.appendChild(p)
	 articles.appendChild(article)

	 input.value = ''
	 textarea.value = ''
}

document.getElementById('createArticleButton').addEventListener('click', createArticle)