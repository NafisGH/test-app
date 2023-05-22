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

    }

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
}