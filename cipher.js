const isUpperCase = str => {
	return str === str.toUpperCase()
}

const encrypt = (text, shift) => {
	return text.replace(/[A-Za-z]/g, c => {
		if (isUpperCase(c)) {
			return String.fromCharCode(((c.charCodeAt(0) - 65 + shift) % 26) + 65)
		} else {
			return String.fromCharCode(((c.charCodeAt(0) - 97 + shift) % 26) + 97)
		}
	})
}

const decrypt = () => {
	const text = document.querySelector('#textToDecrypt').value
	const shift = Number(document.querySelector('#shift').value)

	const unshift = (26 - shift) % 26

	const result = encrypt(text, unshift)

	document.querySelector('#result').innerText = 'Result:' + result
}

const formSubmit = () => {
	const text = document.querySelector('#textToEncrypt').value
	const shift = Number(document.querySelector('#shift').value)

	const result = encrypt(text, shift)
	document.querySelector('#textToDecrypt').value = result
	document.querySelector('#result').innerText = 'Result: '
}
