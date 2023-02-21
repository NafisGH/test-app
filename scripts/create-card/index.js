const tmplNewCard = document.querySelector('#tmpl-new-card');

const listCards = document.querySelector('.list-card')



const handleCreateNewCard = (title, author, srcImg, dateCreate) => {
    const newCard = tmplNewCard.content.querySelector('.card').cloneNode(true);

    const headerCard = newCard.querySelector('.header-card');
    const authorCard = newCard.querySelector('.author-card');
    const imgCard = newCard.querySelector('.img-card');
    const cardCreationDate = newCard.querySelector('.card-creation-date');

    headerCard.textContent = title;
    authorCard.textContent = author;
    imgCard.src = srcImg;
    cardCreationDate.textContent = dateCreate;

    return newCard;
}

const newCard = handleCreateNewCard('Test 1', 'Jon P.', 'https://plus.unsplash.com/premium_photo-1676064229122-ab0d1385efbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', '21.02.2023')

listCards.append(newCard)