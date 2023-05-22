import "../styles/root.css";
import { handleGetCorrectDate } from "../utils/helper.js";
import { cards, testCardsFromServer } from "../utils/constants";

import PopupCreateCard from "../scripts/PopupCreateCard";
import Card from "../scripts/Card";
import PaginationPanel from "../scripts/PaginationPanel";
import PanelSearch from "../scripts/PanelSearch";

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");
const listCards = document.querySelector(".list-card");

export const cardsFromServer = [...testCardsFromServer];

// Эта функция Будет получать данные карточки пришедшей от серева, в данном случае от массива выше cards
const showCardFromServer = () => {
  const [date, resDate] = handleGetCorrectDate();
  let { updatePages } = new PaginationPanel(cards);
  new PanelSearch ({updatePages})

  cardsFromServer.forEach((card) => {
    const newCard = new Card({ date, resDate, ...card, updatePages, });
    cards.push(newCard);
  });
  updatePages(cards)
  const popupCreateCard = new PopupCreateCard({
    cls: "modal-create-card",
    updatePages,
  });
  buttonCreateNewCard.addEventListener("click", () => {
    popupCreateCard.openPopup();
  });
};

showCardFromServer();




