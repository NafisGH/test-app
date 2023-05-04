
export const preventDefaults = (event) => { 
    event.preventDefault()
    event.stopPropagation() 
  };

export const getElementsNewCard = () => {
    const tmplNewCard = document.querySelector('#tmpl-new-card'); // Нашли шаблон
    console.log('----------', tmplNewCard)
    const cardClone = tmplNewCard.content.cloneNode(true); // Создаем клон шаблона
    const elCard = cardClone.querySelector('.card'); // Находим Li клонированный элемент

    
    
    const headerTitle = elCard.querySelector('.header-card');
    const authorCard = elCard.querySelector('.author-card');
    const imgCard = elCard.querySelector('.img-card');
    const cardDate = elCard.querySelector('.card-creation-date');

    const btnEditCard = elCard.querySelector('.btn-edite'); // Кнопка на карточке изменить "карандашик" 

    const modalEditeCard = document.querySelector('#modal-edite-card');
    const buttonCloseEditeCard = document.querySelector('#button-close-edite-card'); // Кнопка закрытия окна изменеия карточки
    const input_name_modalEditeCard = modalEditeCard.querySelector('#name-edite'); 
    const input_urlImg_modalEditeCard = modalEditeCard.querySelector('#urlImg-edite');
    const btnSaveEditeContent = modalEditeCard.querySelector('#btn-edite-content') // кнопка подтверждения изменений

    const elCountLike = elCard.querySelector('.valueLike');
    const elCountDislike = elCard.querySelector('.valueDislike');
    const btnLike = elCard.querySelector('.btn-like');
    const btnDislike = elCard.querySelector('.btn-dislike');

    const btnDeleteCard = elCard.querySelector('.btn-delete');

    const btnAddFavorites = elCard.querySelector('.btn-favorites');



    return {
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

    }
}

// Функция создания даты карточки
export const handleGetCorrectDate = () => {
    const correctElDate = (value) => {
        if(Number(value) < 10) {
            return '0' + value
        } 
        return value
    }
    const date = Date.now(); // Date.now() Выдает дату в формате чисел 1677313685236 для обработки компом
    const currentDate = new Date(date); // new Date() Выдает дату в формате Sat Feb 25 2023 13:30:08 GMT+0500 (Екатеринбург, стандартное время)
    
    const day = correctElDate(currentDate.getDate());
    const month = correctElDate(currentDate.getMonth() + 1);
    const yers = currentDate.getUTCFullYear();

    const resDate = `${day}/${month}/${yers}`;
    return [date, resDate];
}