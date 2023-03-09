import "../styles/root.css";

import {
    openCreatePopup,
} from '../scripts/create-card/popup-create-card';


const buttonCreateNewCard = document.querySelector(".btn-create-new-card");

export const cards = []; // Создаем пустой массив что бы потом заполнять его карточками



const modal = document.querySelector("#modal");

buttonCreateNewCard.addEventListener("click", openCreatePopup);
