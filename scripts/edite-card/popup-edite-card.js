

let value_input_name_modalEditeCard = "";
let value_input_urlImg_modalEditeCard = "";

const modalEditeCard = document.querySelector('#modal-edite-card');
const buttonCloseEditeCard = document.querySelector('#button-close-edite-card'); // Кнопка закрытия окна изменеия карточки
const input_name_modalEditeCard = modalEditeCard.querySelector('#name-edite'); 
const input_urlImg_modalEditeCard = modalEditeCard.querySelector('#urlImg-edite');
const btnSaveEditeContent = modalEditeCard.querySelector('#btn-edite-content') // кнопка подтверждения изменений

const inputs = { 
    titleEdite: '',
    src: '',
 }

 let currentElementsCard = '';


const onChangeInput = (event, valueInput) => {
  valueInput = event.target.value;
};

input_name_modalEditeCard.addEventListener("input", (event) => {
  onChangeInput(event, value_input_name_modalEditeCard);
});

input_urlImg_modalEditeCard.addEventListener("input", (event) => {
  onChangeInput(event, value_input_urlImg_modalEditeCard);
});


// Функция открывает окно редактирования карточки
    const openPopupEditCard = ( {headerTitle, imgCard, elCard} ) => {
       currentElementsCard = {headerTitle, imgCard, elCard} 
        modalEditeCard.classList.add("active");

        input_name_modalEditeCard.value = headerTitle.textContent
        input_urlImg_modalEditeCard.value = imgCard.src
}

// Ф-я сохранение изменений
const saveEditeContent = () => {
       const {headerTitle, imgCard, elCard} = currentElementsCard
        headerTitle.textContent = input_name_modalEditeCard.value;
        imgCard.src = input_urlImg_modalEditeCard.value;
        modalEditeCard.classList.remove("active");
}

btnSaveEditeContent.addEventListener("click", (event) => {
  event.preventDefault();
  saveEditeContent();
})


buttonCloseEditeCard.addEventListener("click", () => {
  modalEditeCard.classList.remove("active");
  input_name_modalEditeCard.value = "";
  input_urlImg_modalEditeCard.value = "";
  value_input_name_modalEditeCard = "";
  value_input_urlImg_modalEditeCard = "";
});

export {
    openPopupEditCard,
    saveEditeContent,
}