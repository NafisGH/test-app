import Popup from "./Popup";
import { handleGetCorrectDate, } from "../utils/helper";
import { cardsFromServer } from "../src";

import Card from "./Card";
import { cards } from "../utils/constants";

const listCards = document.querySelector(".list-card");

export default class PopupCreateCard extends Popup{
    constructor(clsModalCard) {
        super(clsModalCard);
        this.inputs = {
            title: {
                value: '',
                valid: false,
              },
              author: {
                value: '',
                valid: false,
              },
              url: {
                value: '',
                valid: false,
              },
        }
        this.btnSubmit = document.getElementById('create')
        this.btnCloseModalCreate = document.getElementById('button-close')

        this.inputTitleCardName = document.getElementById("сard-name");
        this.inputAuthor = document.getElementById("card-author");
        this.inputUrlImg = document.getElementById("urlImg");

        this.init()
        
    }   

    init() {
      this.inputTitleCardName.addEventListener('input', (event) => {
        this.inputs.title.value = event.target.value;
      })
      this.inputAuthor.addEventListener('input', (event) => {
        this.inputs.author.value = event.target.value;
      })
      this.inputUrlImg.addEventListener('input', (event) => {
        this.inputs.url.value = event.target.value;
      })

      this.btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const newElCard = this.createNewCard();
        cards.push(newElCard)
        listCards.append(newElCard);
        super.closePopup();
        this.clearInputs();
        
      })
     
      this.btnCloseModalCreate.addEventListener('click', ()=> {
        super.closePopup();
        this.clearInputs();
      })
      
    }

    clearInputs() {
      this.inputs.title.value = '';
      this.inputs.author.value = '';
      this.inputs.url.value = '';
      this.inputTitleCardName.value = ''; 
      this.inputAuthor.value = ''; 
      this.inputUrlImg.value = ''; 
    }
      
    createNewCard() {
        const [date, resDate] = handleGetCorrectDate();
        const id = Math.floor(Math.random() * Date.now()).toString(16);
        const dataCard = {
            title: this.inputs.title.value,
            author: this.inputs.author.value,
            url: this.inputs.url.value,
            date,
            resDate,
            id,
            likes: 0,
            dislikes: 0,
          }

          const newCard = new Card(dataCard)

          cardsFromServer.push(dataCard)

        return newCard.getElCard()   
    }
}