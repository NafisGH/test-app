

export default class Popup {
    constructor(clsModalCard) {
        this.popup = document.getElementById(clsModalCard);
    }

    openPopup() {
        this.popup.classList.add('active');
    }

    closePopup() {
        this.popup.classList.remove('active');
    }

}