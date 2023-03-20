import Popup from "./Popup";
import { handleGetCorrectDate, getElementsNewCard } from "../utils/helper";
import { cards } from "../src";

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
        this.init()

        this.inputTitleCardName = document.getElementById("сard-name");
        console.log(this.inputTitleCardName)
        this.inputAuthor = document.getElementById("card-author");
        this.inputUrlImg = document.getElementById("urlImg");
    }   

    init() {
      console.log('--------->')
      // this.inputTitleCardName.addEventListener('input', (event) => {
      //   this.inputs.title.value = event.target.value;
      // })
      this.btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const newElCard = this.createNewCard()
        listCards.append(newElCard)
        super.closePopup()
      })
      this.btnCloseModalCreate.addEventListener('click', ()=> {
        super.closePopup()
      })
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
        const elemNewCard = getElementsNewCard();

        elemNewCard.headerTitle.textContent = this.inputs.title.value;
        elemNewCard.authorCard.textContent = this.inputs.author.value;
        elemNewCard.imgCard.src = this.inputs.url.value;
        elemNewCard.cardDate.textContent = resDate;
        elemNewCard.elCard.id = id;

        cards.push(dataCard)

        return elemNewCard.elCard;

        
    }

    
    
    // open() {
    //     super.openPopup(); // Это вызывается у родительского класса метод openPopup()

    // }

}