import "../styles/root.css";
import { handleGetCorrectDate } from "../utils/helper.js";
import { cards, testCardsFromServer } from "../utils/constants";

import PopupCreateCard from "../scripts/PopupCreateCard";
import Card from "../scripts/Card";
import PaginationPanel from "../scripts/PaginationPanel";

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");
const listCards = document.querySelector(".list-card");

export const cardsFromServer = [...testCardsFromServer];

// Эта функция Будет получать данные карточки пришедшей от серева, в данном случае от массива выше cards
const showCardFromServer = () => {
  const [date, resDate] = handleGetCorrectDate();
  let paginationPanel = new PaginationPanel(cards);
  cardsFromServer.forEach((card) => {
    const newCard = new Card({ date, resDate, ...card, updatePages: paginationPanel.updatePages, });
    cards.push(newCard);
    // listCards.append(newCard.elemNewCard.elCard);
  });
  paginationPanel.updatePages(cards);
  const popupCreateCard = new PopupCreateCard({
    cls: "modal-create-card",
    updatePages: paginationPanel.updatePages,
  });
  buttonCreateNewCard.addEventListener("click", () => {
    popupCreateCard.openPopup();
  });
};

showCardFromServer();

let valueInputSearch = "";

const inputSearch = document.querySelector("#form-search-input");
const btnSearch = document.querySelector(".btn-search");

inputSearch.addEventListener("input", (event) => {
  valueInputSearch = event.target.value;
});

const searchCards = (elFilteredElCard) => {
  const listCards = document.querySelector(".list-card");
  if (!listCards.querySelector(`li.card[id="${elFilteredElCard.id}"]`)) {
    listCards.append(elFilteredElCard.elemNewCard.elCard); // Добавляем в разметку Li, карточку объект
  }
};

const searchOrderCards = (elFilteredElCard, index) => {
  const currentElListCardsInDom = document.querySelectorAll(".card");

  if (index >= currentElListCardsInDom.length) {
    return listCards.append(elFilteredElCard.elemNewCard.elCard);
  }

  const currentElCardOrder = parseInt(
    currentElListCardsInDom[index].dataset.order
  ); // текущий порядок в браузере в разметке

  if (elFilteredElCard.order < currentElCardOrder) {
    return listCards.insertBefore(
      elFilteredElCard.elemNewCard.elCard,
      currentElListCardsInDom[index]
    );
  }
  if (elFilteredElCard.order > currentElCardOrder) {
    return searchOrderCards(elFilteredElCard, index + 1);
  }
};

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();

  // Регулярное выражение, которое будем использовать для поиска
  const regexp = new RegExp(valueInputSearch, "i");
  const filteredIdCards = []; // тут будут лежать id карточек, которые нужно показать
  const filteredElCards = []; // тут будут лежать карточеки, которые нужно показать

  cards.forEach((elCrad) => {
    if (regexp.test(elCrad.title)) {
      filteredIdCards.push(elCrad.id);
      filteredElCards.push(elCrad);
    }
  });

  // Находим карточки, которые в данный момент показываются на странице
  let currentElListCards = listCards.querySelectorAll(".card");

  currentElListCards.forEach((currentElCard) => {
    if (!filteredIdCards.includes(currentElCard.id)) {
      currentElCard.remove();
    }
  });

  let index = 0;

  filteredElCards.forEach((elFilteredElCard) => {
    // searchCards(elFilteredElCard)

    searchOrderCards(elFilteredElCard, index);

    index = 0;
  });
});

