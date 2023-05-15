import PopupEditeCard from "./PopupEditeCard.js";
import PopupDeleteCard from "./PopupDeleteCard.js";
import PaginationPanel from "./PaginationPanel.js";

import { getElementsNewCard } from "../utils/helper.js";
import { cards } from "../utils/constants.js";

let paginationPanel = new PaginationPanel(cards);

export default class Card {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.url = data.url;
    this.likes = data.likes;
    this.dislikes = data.dislikes;
    this.date = data.date;
    this.resDate = data.resDate;
    this.id = data.id;
    this.updatePages = data.updatePages;

    this.init();
  }

  static popupEditCard = new PopupEditeCard({
    cls: "modal-edite-card",
    updatePages: paginationPanel.updatePages,
  });
  
  static popupDeleteCard = new PopupDeleteCard({
    cls: "modal-delete-card",
    updatePages: paginationPanel.updatePages,
  });

  static order = 1;

  init() {
    const elemNewCard = getElementsNewCard();
    this.elemNewCard = elemNewCard;

    this.elemNewCard.headerTitle.textContent = this.title;
    this.elemNewCard.authorCard.textContent = this.author;
    this.elemNewCard.imgCard.src = this.url;
    this.elemNewCard.cardDate.textContent = this.resDate;
    this.elemNewCard.elCard.id = this.id;

    this.elemNewCard.elCard.dataset.order = Card.order;
    this.order = Card.order;

    this.elemNewCard.btnLike.addEventListener("click", () => {
      this.handleLikes();
    });
    this.elemNewCard.btnDislike.addEventListener("click", () => {
      this.handleDislikes();
    });

    Card.order += 1;

    this.initPopupEditCard();
    this.initPopupDeleteCard();
  }

  initPopupEditCard() {
    this.elemNewCard.btnEditCard.addEventListener("click", () => {
      Card.popupEditCard.openPopup({
        title: this.elemNewCard.headerTitle,
        url: this.elemNewCard.imgCard,
        elCard: this.elemNewCard.elCard,
        id: this.id,
        updatePages: this.updatePages,
      });
    });
  }

  initPopupDeleteCard() {
    this.elemNewCard.btnDeleteCard.addEventListener("click", () => {
      Card.popupDeleteCard.openPopup({
        elCard: this.elemNewCard.elCard,
        updatePages: this.updatePages,
      });
    });
  }

  handleLikes = () => {
    this.likes += 1;
    this.elemNewCard.elCountLike.textContent = this.likes;
  };

  handleDislikes = () => {
    this.dislikes += 1;
    this.elemNewCard.elCountDislike.textContent = this.dislikes;
  };

  getElCard = () => {
    return this.elemNewCard.elCard;
  };
}
