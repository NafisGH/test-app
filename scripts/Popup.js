

export default class Popup {
    constructor(clsModalCard) {
        this.popup = document.getElementById(clsModalCard);
        this.btnClose = this.popup.querySelector('.btn-close-popup')
    }

    openPopup() {
        this.popup.classList.add('active');
    }

    closePopup() {
        this.popup.classList.remove('active');
    }

    initClosePopup() {
        this.btnClose.addEventListener('click', () => {
            this.closePopup()
        })

    }

}