


export const getElementsNewCard = () => {
    const tmplNewCard = document.querySelector('#tmpl-new-card');
    const card = tmplNewCard.content.querySelector('.card').cloneNode(true);

    
    
    const headerTitle = card.querySelector('.header-card');
    const authorCard = card.querySelector('.author-card');
    const imgCard = card.querySelector('.img-card');
    const cardDate = card.querySelector('.card-creation-date');

    const btnEditCard = card.querySelector('.btn-edite'); // Кнопка на карточке изменить "карандашик" 

    const modalEditeCard = document.querySelector('#modal-edite-card');
    const buttonCloseEditeCard = document.querySelector('#button-close-edite-card'); // Кнопка закрытия окна изменеия карточки
    const input_name_modalEditeCard = modalEditeCard.querySelector('#name-edite'); 
    const input_urlImg_modalEditeCard = modalEditeCard.querySelector('#urlImg-edite');
    const btnSaveEditeContent = modalEditeCard.querySelector('#btn-edite-content') // кнопка подтверждения изменений

    const elCountLike = card.querySelector('.valueLike');
    const elCountDislike = card.querySelector('.valueDislike');
    const btnLike = card.querySelector('.btn-like');
    const btnDislike = card.querySelector('.btn-dislike');

    const btnDelete = card.querySelector('.btn-delete');

    const btnAddFavorites = card.querySelector('.btn-favorites');



    return {
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