const app = document.querySelector('#app')
const docs = document.querySelector('#docs')

const displayApp = () => {
	app.style.display = 'block'
	docs.style.display = 'none'
}

const displayDoc = () => {
	app.style.display = 'none'
	docs.style.display = 'block'
}

displayDoc()
