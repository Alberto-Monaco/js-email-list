/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetch altre 10 mail (sostituendo le altre)*/

const EmailList = []
for (let i = 0; i < 10; i++) {
	axios
		.get('https://flynn.boolean.careers/exercises/api/random/mail')

		.then((response) => EmailList.push(response.data.response))
}
console.log(EmailList)

const ulEl = document.querySelector('ul')
console.log(ulEl)
for (let i = 0; i < EmailList.length; i++) {
	let element = EmailList[i]
	const liEl = document.createElement('li')
	liEl.textContent = element
	ulEl.appendChild(liEl)
	console.log(liEl)
	console.log(ulEl)
}
