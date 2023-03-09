import { cards } from "../../src/index.js";

import {
  handleGetCorrectDate,
  getElementsNewCard,
  
} from "../../utils/helper.js";

import {
    openPopupEditCard,
} from '../edite-card/popup-edite-card.js'

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

const inputCardName = document.querySelector("#сard-name");
const inputAuthor = document.querySelector("#card-author");
const inputUrlImg = document.querySelector("#urlImg");
const btnCloseCreateCard = document.querySelector("#button-close");
const buttonCreate = document.querySelector("#create");

let valueInputCardName = "";
let valueInputAuthor = "";
let valueinputUrlImg = "";

const inputs = {
  title: "",
  author: "",
  urlImg: "",
};

// Функция открытия создания карточки, Экспортировал в index.js  и там вызывается
export const openCreatePopup = () => {   
  modal.style.display = "flex";
};

const tmplNewCard = document.querySelector("#tmpl-new-card");
const listCards = document.querySelector(".list-card");

// Функция открытия и закрытия модального окна + создание новой карточки
const handleCreateNewcard = () => {
  const [date, resDate] = handleGetCorrectDate(); // Деструктуризация мы получили две переменные
  const id = Math.floor(Math.random() * Date.now()).toString(16); // Создаем рандомный ID для новой карточки

  const dataCard = {
    ...inputs,
    date,
    resDate,
    id,
    // likes: 0,
    // dislikes: 0,

  }

  const elemNewCard = getElementsNewCard();
  const {
    card,
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
    btnDelete,
    btnAddFavorites,
  } = elemNewCard;

  headerTitle.textContent = dataCard.title;
  authorCard.textContent = dataCard.author;
  imgCard.src = dataCard.urlImg;
  cardDate.textContent = dataCard.resDate;
  card.id = dataCard.id;

//   btnEditCard.addEventListener("click", () => {
//      openPopupEditCard(elemNewCard)
//     // modalEditeCard.classList.add("active");
//     // input_name_modalEditeCard.value = headerTitle.innerText;
//     // input_urlImg_modalEditeCard.value = imgCard.src;
//   });


//   const btnDeleteCard = card.querySelector(".btn-delete");
//   const modalDeleteCard = document.querySelector("#modal-delete-card");
//   const btnConfirmDeleteCard = card.querySelector("#btn-confirm-delete-card");
//   const buttonCloseDeleteCard = document.querySelector(
//     "#button-close-delete-card"
//   );

//   btnDeleteCard.addEventListener("click", () => {
//     modalDeleteCard.classList.add("active");
//   });

//   buttonCloseDeleteCard.addEventListener("click", () => {
//     modalDeleteCard.classList.remove("active");
//   });

  
// Добавляем объект с данными картоки в массив
  cards.push(dataCard);

  return card;
};


const handleAddNewCard = (card) => {
  listCards.prepend(card);
};

inputCardName.addEventListener("input", (event) => {
    valueInputCardName = event.target.value;
  });
  inputAuthor.addEventListener("input", (event) => {
    valueInputAuthor = event.target.value;
  });
  inputUrlImg.addEventListener("input", (event) => {
    valueinputUrlImg = event.target.value;
  });

buttonCreate.addEventListener("click", () => {
    const newCard = handleCreateNewcard({
      title: valueInputCardName,
      author: valueInputAuthor,
      urlImg: valueinputUrlImg,
    });
    handleAddNewCard(newCard);
  
    modal.style.display = "none";
    inputCardName.value = "";
    inputAuthor.value = "";
    inputUrlImg.value = "";
    valueInputCardName = "";
    valueInputAuthor = "";
    valueinputUrlImg = "";
  });



btnCloseCreateCard.addEventListener("click", () => {
  modal.style.display = "none";
  inputCardName.value = "";
  inputAuthor.value = "";
  inputUrlImg.value = "";
  valueInputCardName = "";
  valueInputAuthor = "";
  valueinputUrlImg = "";
});



modal.addEventListener("click", () => {
  modal.style.display = "none";
  inputCardName.value = "";
  inputAuthor.value = "";
  inputUrlImg.value = "";
  valueInputCardName = "";
  valueInputAuthor = "";
  valueinputUrlImg = "";
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});


