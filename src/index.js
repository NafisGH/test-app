import "../styles/root.css";

import { 
    openCreatePopup,
    likes,
    dislikes,
 } from "../scripts/create-card/popup-create-card";
import { getElementsNewCard } from "../utils/helper.js";
import { openPopupEditCard } from '../scripts/edite-card/popup-edite-card.js';
import { openPopupDeleteCard } from '../scripts/delete-card/popup-delete-card.js';

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");

// Создаем пустой массив что бы потом заполнять его карточками
export const cards = [
    {
        author:  "dddd",
        date: 1678780530204,
        dislikes: 0,
        id: "b23fdaf60c",
        likes: 0,
        resDate: "14/03/2023",
        title:  "rrrrrrr",
        url: "https://images.unsplash.com/photo-1513036191774-b2…hcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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

    headerTitle.textContent = valueInputCardName;
    authorCard.textContent = valueInputAuthor;
    imgCard.src = valueinputUrlImg;
    cardDate.textContent = dataCard.resDate;
    elCard.id = dataCard.id;

    btnEditCard.addEventListener("click", () => { openPopupEditCard(elemNewCard) });
    btnDeleteCard.addEventListener('click', () => { openPopupDeleteCard(elemNewCard) });
    btnLike.addEventListener('click', () => { likes(dataCard, elCountLike) });
    btnDislike.addEventListener('click', () => { dislikes(dataCard, elCountDislike) });

    console.log('Запуск')
    
}

cards.forEach((valueCard) => {
    showCardFromServer(valueCard)
})



buttonCreateNewCard.addEventListener("click", openCreatePopup);
