import Popup from "./Popup";

export default class PopupEditeCard extends Popup {
    constructor(clsModalCard) {
        super(clsModalCard);

        this.init()
    }
    init() {
        super.initClosePopup()
    }
}