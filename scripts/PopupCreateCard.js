import Popup from "./Popup";
import { handleGetCorrectDate } from "../utils/helper";
import { cardsFromServer } from "../src";
import DragAndDrop from "./DragAndDrop";
import Card from "./Card";
import { cards } from "../utils/constants.js";

export default class PopupCreateCard extends Popup {
  constructor({cls, updatePages}) {
    super(cls);
    this.inputs = {
      title: {
        value: "",
        valid: false,
        elError: this.popup.querySelector('.error-title'),
      },
      author: {
        value: "",
        valid: false,
        elError: this.popup.querySelector('.error-author'),
      },
      url: {
        value: "",
        valid: false,
        elError: this.popup.querySelector('.error-urlImg'),
      },
    };
    this.updatePages = updatePages;

    this.btnSubmit = document.getElementById("create");
    this.btnCloseModalCreate = document.getElementById("button-close");
    this.inputTitleCardName = document.getElementById("сard-name");
    this.inputAuthor = document.getElementById("card-author");
    this.inputUrlImg = document.getElementById("urlImg");

    this.init();
  }

  static dragAndDrop = new DragAndDrop();

  init() {
    this.inputTitleCardName.addEventListener("input", (event) => {
      this.inputs.title.value = event.target.value;
    });
    this.inputAuthor.addEventListener("input", (event) => {
      this.inputs.author.value = event.target.value;
    });
    this.inputUrlImg.addEventListener("input", (event) => {
      this.inputs.url.value = event.target.value;
    });

    this.btnCloseModalCreate.addEventListener('click', (event) => {
      event.preventDefault();
      PopupCreateCard.dragAndDrop.handleClickBtnClearInput(event);
    })

    this.btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      const newElCard = this.createNewCard();
      const valid = this.validForm();

      if (valid) {
        cards.push(newElCard);
        this.updatePages(cards);
        super.closePopup();
        this.clearInputs();
        PopupCreateCard.dragAndDrop.handleClickBtnClearInput(event);
      }
    });

    this.btnCloseModalCreate.addEventListener("click", () => {
      super.closePopup();
      this.clearInputs();
    });
  }

  validForm() {
    let valid = true;

    if (!this.inputs.title.value) {
      this.inputs.title.elError.textContent = "Title должно быть запонено";
      valid = false;
    } else {
      this.inputs.title.elError.textContent = "";
    }

    if (!this.inputs.author.value) {
      this.inputs.author.elError.textContent = "Author должно быть запонено";
      valid = false;
    } else {
      this.inputs.author.elError.textContent = "";
    }

    if (!this.inputs.url.value && !PopupCreateCard.dragAndDrop.file) {
      this.inputs.url.elError.textContent =
        "Загрузите картинку или вставьте ссылку";
      valid = false;
    } else {
      this.inputs.url.elError.textContent = "";
    }

    return valid;
  }

  clearInputs() {
    this.inputs.title.value = "";
    this.inputs.author.value = "";
    this.inputs.url.value = "";
    this.inputTitleCardName.value = "";
    this.inputAuthor.value = "";
    this.inputUrlImg.value = "";
  }

  createNewCard() {
    const [date, resDate] = handleGetCorrectDate();
    const id = Math.floor(Math.random() * Date.now()).toString(16);
    const dataCard = {
      title: this.inputs.title.value,
      author: this.inputs.author.value,
      url: this.inputs.url.value || PopupCreateCard.dragAndDrop.srcImg,
      date,
      resDate,
      id,
      likes: 0,
      dislikes: 0,
      updatePages: this.updatePages,
    };

    const newCard = new Card(dataCard);

    cardsFromServer.push(dataCard);
    return newCard;
  }
}
