const tmplNewCard = document.querySelector('#tmpl-new-card');
const newCard = tmplNewCard.content.querySelector('.card').cloneNode(true);

console.log(newCard)