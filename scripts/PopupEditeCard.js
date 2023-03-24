import Popup from "./Popup";

let value_input_name_modalEditeCard = "";
let value_input_urlImg_modalEditeCard = "";
let currentElementsCard = '';


export default class PopupEditeCard extends Popup {
    constructor(clsModalCard) {
        super(clsModalCard);
        
        this.init()
    }
    init() {
        super.initClosePopup()
    }


}