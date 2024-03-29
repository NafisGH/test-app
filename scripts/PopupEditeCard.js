import Popup from "./Popup";

import { getElementsNewCard } from "../utils/helper";
import { cards } from "../utils/constants";

const elemNewCard = getElementsNewCard()

export default class PopupEditeCard extends Popup {
    constructor({cls}) {
        super(cls);
        this.btnSubmit = this.popup.querySelector('#btn-edite-content');
        this.currentElementsCard = '';
        this.inputs = {
            title: {
                value: '',
                valid: false,
              },
              url: {
                value: '',
                valid: false,
              },
        };

        this.inputTitle = this.popup.querySelector('#name-edite')
        this.inputUrl = this.popup.querySelector('#urlImg-edite')

        this.init()
    }
    init() {
        super.initClosePopup()
        this.btnSubmit.addEventListener('click', (event) => {
            event.preventDefault()
            const {title, url, elCard, id} = this.currentElementsCard;
            const card = cards.find((card) => card.id === id)

            title.textContent = this.inputs.title.value;
            url.src = this.inputs.url.value;
            card.title = this.inputs.title.value;
            card.url = this.inputs.url.value;

            this.inputs.title.value = '';
            this.inputs.url.value = '';
            this.inputTitle.value = '';
            this.inputUrl.value = '';
            this.updatePages(cards)
            super.closePopup()
        })

        this.inputTitle.addEventListener('input', (event) => {
            this.inputs.title.value = event.target.value;
          })
          
          this.inputUrl.addEventListener('input', (event) => {
            this.inputs.url.value = event.target.value;
          })
    }

    openPopup({title, url, elCard, id, updatePages}) {
        this.currentElementsCard = {title, url, elCard, id}
        super.openPopup();
        this.elemEditeCard = elemNewCard
        this.inputTitle.value = title.textContent;
        this.inputUrl.value = url.src;
        this.inputs.title.value = title.textContent;
        this.inputs.url.value = url.src;
        this.updatePages = updatePages;

    }
}