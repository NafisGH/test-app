import Popup from "./Popup";
import { cards } from "../utils/constants.js";

export default class PopupDeleteCard extends Popup {
    constructor({cls,updatePages,}) {
        super(cls);
        this.btnDelete = this.popup.querySelector('#btn-confirm-delete-card')
        this.curentElCard = '';
        
        this.updatePages = updatePages;
        this.init()
    }
    init() {
        super.initClosePopup()
        this.btnDelete.addEventListener('click', (event) => {
            event.preventDefault()
            const index = cards.findIndex(card => card.id === this.curentElCard.id)
            if(index !== -1) {
                cards.splice(index, 1);
                this.curentElCard.remove();
                this.updatePages(cards)
            } else {
                alert("В массиве данной карточки нет")
            }
            super.closePopup()
        })
    }
    openPopup({elCard, }) {
        super.openPopup()
        this.curentElCard = elCard;
    }
}