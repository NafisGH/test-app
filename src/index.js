import "../styles/root.css";
import { handleGetCorrectDate } from "../utils/helper.js";
import { cards, } from "../utils/constants";

import { 
    likes,
    dislikes,
 } from "../scripts/create-card/popup-create-card";
import { getElementsNewCard } from "../utils/helper.js";
import { openPopupEditCard } from '../scripts/edite-card/popup-edite-card.js';
import { openPopupDeleteCard } from '../scripts/delete-card/popup-delete-card.js';

import Popup from "../scripts/Popup"; 
import PopupCreateCard from "../scripts/PopupCreateCard";
import PopupEditeCard from "../scripts/PopupEditeCard";
import Card from "../scripts/Card";

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");
const listCards = document.querySelector(".list-card");

// Создаем пустой массив что бы потом заполнять его карточками
export const cardsFromServer = [
    {
        author: 'Bob S.',
        dislikes: 0,
        id: "1",
        likes: 0,
        title:'Nature',
        url: 'https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        author: 'Jack S.',
        dislikes: 0,
        id: "2",
        likes: 0,
        title:'Car002',
        url: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        author: 'Ali M.',
        dislikes: 0,
        id: "3",
        likes: 0,
        title:'Car009',
        url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        author: 'Fox G.',
        dislikes: 0,
        id: "4",
        likes: 0,
        title:'Car010',
        url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
];

// Эта функция Будет получать данные карточки пришедшей от серева, в данном случае от массива выше cards
const showCardFromServer = () => {
    const [date, resDate] = handleGetCorrectDate();

    cardsFromServer.forEach((card) => {
        const newCard = new Card({date, resDate, ...card});
        cards.push(newCard)
        listCards.append(newCard.elemNewCard.elCard)
    })
}


showCardFromServer()

const popupCreateCard = new PopupCreateCard('modal-create-card');
buttonCreateNewCard.addEventListener("click", () => { popupCreateCard.openPopup() });


let valueInputSearch = '';

const inputSearch = document.querySelector('#form-search-input');
const btnSearch = document.querySelector('.btn-search');

inputSearch.addEventListener('input', (event) => {
    valueInputSearch = event.target.value;
})

btnSearch.addEventListener('click', (event) => {
    event.preventDefault()

    // Регулярное выражение, которое будем использовать для поиска
    const regexp = new RegExp(valueInputSearch, 'i');

    const filteredIdCards = []; // тут будут лежать id карточек, которые нужно показать
    const filteredElCards = []; // тут будут лежать карточеки, которые нужно показать

    cards.forEach((elCrad) => {
        if(regexp.test(elCrad.title)) {
            filteredIdCards.push(elCrad.id);
            filteredElCards.push(elCrad)
        }
    })
    console.log(filteredIdCards)
    console.log(filteredElCards)

    // Находим карточки, которые в данный момент показываются на странице
    let currentElListCards = listCards.querySelectorAll('.card')

    currentElListCards.forEach((currentElCard) => {
        if (!filteredIdCards.includes(currentElCard.id)) {
            currentElCard.remove()
        }
    })

    filteredElCards.forEach((elFilteredElCards) => {
        const listCards = document.querySelector('.list-card')
        if(!listCards.querySelector(`li.card[id="${elFilteredElCards.id}"]`)) {
            listCards.append(elFilteredElCards.elemNewCard.elCard)  // Добавляем в разметку Li, карточку объект
        }
        
    })
    
    
})




