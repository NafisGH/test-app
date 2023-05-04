
// import { listCards } from "../utils/constants.js"
// const panelPaginationListCards = document.querySelector('.panel-pagination-list-cards');
// const elemUl = panelPaginationListCards.querySelector('.ul');
// let currentPage = 1;

// export const mainFuncPagination = (cards) => {
//     const panelPaginationListCards = document.querySelector('.panel-pagination-list-cards');

//     const btnPrev = panelPaginationListCards.querySelector('.btn-prev');
//     const btnNext = panelPaginationListCards.querySelector('.btn-next');
//     const elemUl = panelPaginationListCards.querySelector('.ul');

//     const numberCards = cards.length
//     const maxPages = Math.ceil( numberCards / 10 )

//     let visibleCards = [];

//     const handleShowPages = () => {
//         // Показывает страницу если их меньше 5
//         if(maxPages < 5){
//             return Array.from({length: maxPages}).map((_, index) => index +1);
//         }
//         const lastPages = maxPages - currentPage;
//         // Не дает перейти в право на несуществующие страницы
//         if (lastPages < 3) {
//             return Array.from({length: 5}).map((_, index) => maxPages - 4 + index)
//         }
//         // Не дает отрицательные страницы
//         if (currentPage < 3) {
//             return Array.from({length: 5}).map((_, index) => index + 1)
//         }
//         // переключение активная страница по центру
//         return Array.from({length: 5}).map((_, index) => currentPage + index - 2)
//     } // всегда дает на выходе массив страниц [1,2,3 ...]

//     const handleShowCards = () => {
//         listCards.innerHTML = "";
//         const startIndex = (currentPage - 1) * 10;
//         const finishIndex = (currentPage - 1) * 10 + 10;
    
//         visibleCards = cards.slice(startIndex, finishIndex);
    
//         visibleCards.forEach((card) => {   
//           listCards.append(card.elemNewCard.elCard)
//         })
//       }

//       const handleClickNextButton = () => {
//         if (maxPages - currentPage < 6) {
//             currentPage = maxPages
//         } else {
//             currentPage += 5
//         }
//         elemUl.innerHTML = "";
//         pages = handleShowPages();
//         showMarkkup();
//         handleShowCards()
//       }
      
//       const handleClickPrevButton = () => {
//         if (currentPage < 6) {
//             currentPage = 1;
//         } else {
//             currentPage -= 5
//         }
//         elemUl.innerHTML = "";
//         pages = handleShowPages();
//         showMarkkup();
//         handleShowCards()
//       }

//       btnPrev.addEventListener('click', handleClickPrevButton )      
//       btnNext.addEventListener('click', handleClickNextButton )      

   

//     if (currentPage > maxPages) {
//         currentPage = maxPages
//     } 
    
//     let pages = handleShowPages();
    
//     const showMarkkup = () => {
//         pages.forEach((page) => {
//             const elNewItem = createElPage(page);
//             elemUl.append(elNewItem);
//         })
        
//     }

//     const createElPage = (value) => {
//         const itemLiPage = document.createElement('li');
//         if(currentPage === value) {
//             itemLiPage.classList.add('active')
//         }
//         itemLiPage.innerHTML = value;
//         itemLiPage.addEventListener('click', (event) => {
//             event.preventDefault()
//             currentPage = value
//             elemUl.innerHTML = ''
//             pages = handleShowPages()
//             showMarkkup()
//             handleShowCards()
//         } )
//         return itemLiPage;
//     }

//     showMarkkup()
//     handleShowCards()
// }

// export const updatePages = (cards) => {
//     elemUl.innerHTML = "";
//     console.log('запуск ---> updatePages')
//     mainFuncPagination(cards);
// }


