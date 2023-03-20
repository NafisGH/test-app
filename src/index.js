import "../styles/root.css";

import { 
    // openCreatePopup,
    likes,
    dislikes,
 } from "../scripts/create-card/popup-create-card";
import { getElementsNewCard } from "../utils/helper.js";
import { openPopupEditCard } from '../scripts/edite-card/popup-edite-card.js';
import { openPopupDeleteCard } from '../scripts/delete-card/popup-delete-card.js';

import Popup from "../scripts/Popup"; 
import PopupCreateCard from "../scripts/PopupCreateCard";

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");

// Создаем пустой массив что бы потом заполнять его карточками
export const cards = [
    {
        author: 'Bob S.',
        date: 1679038063501,
        dislikes: 0,
        id: "1420e034931",
        likes: 0,
        resDate: "17/03/2023",
        title:'Car',
        url: 'https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
];

// Эта функция Будет получать данные карточки пришедшей от серева, в данном случае от массива выше cards
const showCardFromServer = (dataCard) => {
    const elemNewCard = getElementsNewCard();
    const {
        elCard,
        headerTitle,
        authorCard,
        imgCard,
        cardDate,
        btnEditCard,
        modalEditeCard,
        buttonCloseEditeCard,
        input_name_modalEditeCard,
        input_urlImg_modalEditeCard,
        btnSaveEditeContent,
        elCountLike,
        elCountDislike,
        btnLike,
        btnDislike,
        btnDeleteCard,
        btnAddFavorites,
    } = elemNewCard;

    headerTitle.textContent = dataCard.title;
    authorCard.textContent = dataCard.author;
    imgCard.src = dataCard.url;
    cardDate.textContent = dataCard.resDate;
    elCard.id = dataCard.id;

    btnEditCard.addEventListener("click", () => { openPopupEditCard(elemNewCard) });
    btnDeleteCard.addEventListener('click', () => { openPopupDeleteCard(elemNewCard) });
    btnLike.addEventListener('click', () => { likes(dataCard, elCountLike) });
    btnDislike.addEventListener('click', () => { dislikes(dataCard, elCountDislike) });

    
    return elCard
}

const listCards = document.querySelector(".list-card");

cards.forEach((card) => {
     const elCard = showCardFromServer(card)
   listCards.append(elCard)
})


const popupCreateCard = new PopupCreateCard('modal-create-card');
buttonCreateNewCard.addEventListener("click", () => { popupCreateCard.openPopup() });



