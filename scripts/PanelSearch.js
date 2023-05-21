import { cards } from "../utils/constants";

export default class PanelSearch {
    constructor({ updatePages }) {
        this.updatePages = updatePages;
        this.panel = document.querySelector('.panel-search');
        this.inputSearch = document.querySelector("#form-search-input");
        this.btnSearch = document.querySelector(".btn-search");
        this.valueInputSearch = "";
        this.listCards = document.querySelector(".list-card");

        this.inputs = {
            search: {
              value: "",
              valid: false
            }
        };

        this.init()
    }

    init() {

        this.inputSearch.addEventListener('input', this.onInput);
        this.btnSearch.addEventListener('click', this.onSubmit);
        // this.inputSearch.addEventListener("input", (event) => {
        //     this.valueInputSearch = event.target.value;
        // });

        // this.btnSearch.addEventListener("click", (event) => {
        //     event.preventDefault();
          
        //     // Регулярное выражение, которое будем использовать для поиска
        //     const regexp = new RegExp(this.valueInputSearch, "i");
        //     const filteredIdCards = []; // тут будут лежать id карточек, которые нужно показать
        //     const filteredElCards = []; // тут будут лежать карточеки, которые нужно показать
          
        //     cards.forEach((elCrad) => {
        //       if (regexp.test(elCrad.title)) {
        //         filteredIdCards.push(elCrad.id);
        //         filteredElCards.push(elCrad);
        //       }
        //     });
          
        //     // Находим карточки, которые в данный момент показываются на странице
        //     let currentElListCards = this.listCards.querySelectorAll(".card");
          
        //     currentElListCards.forEach((currentElCard) => {
        //       if (!filteredIdCards.includes(currentElCard.id)) {
        //         currentElCard.remove();
        //       }
        //     });
          
        //     let index = 0;
          
        //     filteredElCards.forEach((elFilteredElCard) => {
        //       searchCards(elFilteredElCard)
        //       index = 0;
        //     });

        //   });
    } // init

    onInput = event => this.handleInputValue(event);
    onSubmit = event => this.handleSearch2(event);

    handleInputValue = (event) => { 
        this.inputs.search.value = event.target.value
      }

      handleSearch2 = (event) => {
        let updatePages = this.updatePages
        event.preventDefault();
        const regexp = new RegExp(this.inputs.search.value, "i");  
        const filteredElCards = cards.filter(elCard => regexp.test(elCard.title));
        updatePages(filteredElCards);
      }

    // searchCards = (elFilteredElCard) => {
    //     // const listCards = document.querySelector(".list-card");
    //     if (!this.listCards.querySelector(`li.card[id="${elFilteredElCard.id}"]`)) {
    //         this.listCards.append(elFilteredElCard.elemNewCard.elCard); // Добавляем в разметку Li, карточку объект
    //     }
    //   };



}