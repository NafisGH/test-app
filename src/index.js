
import '../styles/'

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

const inputCardName = document.querySelector('#сard-name');
const inputAuthor = document.querySelector('#card-author');
const inputUrlImg = document.querySelector('#urlImg');

const buttonCreateNewCard = document.querySelector('.btn-create-new-card');

const buttonClose = document.querySelector('#button-close');
const buttonCreate = document.querySelector('#create');


const handleGetCorrectDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const yers = currentDate.getUTCFullYear();

    return `${day}/${month}/${yers}`
}

// Функция создания новой карточки
const tmplNewCard = document.querySelector('#tmpl-new-card');
const listCard = document.querySelector('.list-card');

const handleCreateNewcard = ({ title, author, urlImg }) => {
    const card = tmplNewCard.content.querySelector('.card').cloneNode(true);

    const headerTitle = card.querySelector('.header-card');
    const authorCard = card.querySelector('.author-card');
    const imgCard = card.querySelector('.img-card');

    headerTitle.innerText = title;
    authorCard.innerText = author;
    imgCard.src = urlImg;


    return card;
}



// const newCard2 = handleCreateNewcard({title: 'Mashine', author: 'Fox K.', urlImg: 'https://plus.unsplash.com/premium_photo-1669058795916-34104bc5888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',})
// listCard.prepend(newCard2)




// Функция открытия и закрытия модального окна
let openModal = false;
let valueInputCardName = '';
let valueInputAuthor = '';
let valueinputUrlImg = '';

// function handleClickModal(open) {
//     return () => {
//         if (open) {
//             // openModal = true;
//             modal.style.display = 'flex'
//         } else {
//             // openModal = false;
//             modal.style.display = 'none'
//             inputCardName.value = '';
//             inputAuthor.value = '';
//             inputUrlImg.value = '';
//             valueInputCardName = '';
//             valueInputAuthor = '';
//             valueinputUrlImg = '';
//         }
//     }

// }


buttonCreateNewCard.addEventListener('click', () => {
    modal.style.display = 'flex'
})
buttonClose.addEventListener('click', () => {
    modal.style.display = 'none'
    inputCardName.value = '';
    inputAuthor.value = '';
    inputUrlImg.value = '';
    valueInputCardName = '';
    valueInputAuthor = '';
    valueinputUrlImg = '';
})

inputCardName.addEventListener('input', (event) => {
    valueInputCardName = event.target.value;
   
})
inputAuthor.addEventListener('input', (event) => {
    valueInputAuthor = event.target.value;
})
inputUrlImg.addEventListener('input', (event) => {
    valueinputUrlImg = event.target.value;
})

modal.addEventListener('click', () => {
    modal.style.display = 'none'
    inputCardName.value = '';
    inputAuthor.value = '';
    inputUrlImg.value = '';
    valueInputCardName = '';
    valueInputAuthor = '';
    valueinputUrlImg = '';
})
modalContent.addEventListener('click', (event) => {
    event.stopPropagation()
})

buttonCreate.addEventListener('click', () => {
    const newCard2 = handleCreateNewcard({
        title: valueInputCardName,
        author: valueInputAuthor,
        urlImg: valueinputUrlImg,
        // date: handleGetCorrectDate(),
    })
    listCard.prepend(newCard2)

    modal.style.display = 'none'
    inputCardName.value = '';
    inputAuthor.value = '';
    inputUrlImg.value = '';
    valueInputCardName = '';
    valueInputAuthor = '';
    valueinputUrlImg = '';
})





