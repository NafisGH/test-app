import { cards } from "../../src/index.js";

import {
  handleGetCorrectDate,
  getElementsNewCard,
  
} from "../../utils/helper.js";

import {
    openPopupEditCard,
    saveEditeContent,
} from '../edite-card/popup-edite-card.js';

import {
  openPopupDeleteCard,
  closePopupDeleteCard,
} from '../delete-card/popup-delete-card.js';

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

const inputCardName = document.querySelector("#сard-name");

const inputAuthor = document.querySelector("#card-author");
const inputUrlImg = document.querySelector("#urlImg");
const btnCloseCreateCard = document.querySelector("#button-close");
const buttonCreate = document.querySelector("#create");

const errorTitle = document.querySelector('.error-title');
const errorAuthor = document.querySelector('.error-author');
const errorUrlImg = document.querySelector('.error-urlImg');


let valueInputCardName = "";
let valueInputAuthor = "";
let valueinputUrlImg = "";



// Функция открытия создания карточки, Экспортировал в index.js  и там вызывается
export const openCreatePopup = () => {   
  modal.style.display = "flex";
};

// const tmplNewCard = document.querySelector("#tmpl-new-card");
const listCards = document.querySelector(".list-card");

// Ф-ии лайка и дизлайка
export const likes = (dataCard, elCountLike) => {
  dataCard.likes += 1;
  elCountLike.textContent = dataCard.likes;
};

export const dislikes = (dataCard, elCountDislike) => {
  dataCard.dislikes += 1;
  elCountDislike.textContent = dataCard.dislikes;
};

// Функция открытия и закрытия модального окна + создание новой карточки
const handleCreateNewcard = () => {
  const [date, resDate] = handleGetCorrectDate(); // Деструктуризация мы получили две переменные
  const id = Math.floor(Math.random() * Date.now()).toString(16); // Создаем рандомный ID для новой карточки

  const dataCard = {
    ...inputs,
    date,
    resDate,
    id,
    likes: 0,
    dislikes: 0,
  }

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

  
  

  


  


  
// Добавляем объект с данными картоки в массив
console.log(dataCard)
  cards.push(dataCard);

  return elCard;
};


const handleAddNewCard = (elCard) => {
  listCards.prepend(elCard);
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
  errorTitle.textContent = "";
  errorAuthor.textContent = "";
  errorUrlImg.textContent = "";
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

// Валидация инпутов
const inputs = {
  title: {
    value: '',
    valid: false,
  },
  author: {
    value: '',
    valid: false,
  },
  url: {
    value: '',
    valid: false,
  },
};

inputCardName.addEventListener("input", (event) => {
  inputs.title.value = event.target.value
  console.log(inputs)
})

inputCardName.addEventListener('change', () => {
  if (!inputs.title.value) {
     errorTitle.textContent = 'Поле пустое';
     return
  } 
  if (inputs.title.value.length < 2) {
     errorTitle.textContent = 'Поле слишком короткое';
     return;
  } 
  if (inputs.title.value.length > 15) {
     errorTitle.textContent = 'Поле слишком большое';
     return;
  } else {
    buttonCreate.removeAttribute('disabled')
  } 
})


  inputAuthor.addEventListener('input', (event) => {
  inputs.author.value = event.target.value
  console.log(inputs)
})
 
inputAuthor.addEventListener('change', () => {
  if (!inputs.author.value) {
    errorAuthor.textContent = 'Поле пустое';
    return 
  } 
  if (inputs.author.value.length < 2) {
    errorAuthor.textContent = 'Поле слишком короткое'
     return ;
  } 
  if (inputs.author.value.length > 15) {
    errorAuthor.textContent = 'Поле слишком большое'
     return ;
  } else {
    buttonCreate.removeAttribute('disabled')
  }
 })

 inputUrlImg.addEventListener('input', (event) => {
  inputs.url.value = event.target.value
  console.log(inputs)
})

inputUrlImg.addEventListener('change', (name, value) => {
  let url;
  if(!inputs.url.value)  {
    errorUrlImg.textContent =  "Поле url не должно быть пустым"

  };
  try {
    url = new URL(value);
  } catch (_) {
    return {
      valid: false,
      message: "Неправильная ссылка на картинку"
    };
  }
  if(url.protocol === "http:" || url.protocol === "https:") {
    return {
      valid: true,
      message: ""
    }
  } else {
    return {
      valid: false,
      message: "Неправильная ссылка на картинку"
    };
  }
}
)

