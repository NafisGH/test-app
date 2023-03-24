import Popup from "./Popup";
import { handleGetCorrectDate, getElementsNewCard } from "../utils/helper";
import { cards } from "../src";

import PopupEditeCard from "./PopupEditeCard";
import PopupDeleteCard from "./PopupDeleteCard";

const listCards = document.querySelector(".list-card");

let valueInputCardName = "";
let valueInputAuthor = "";
let valueInputUrlImg = "";

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

        const likes = (dataCard, elCountLike) => {
          dataCard.likes += 1;
          elCountLike.textContent = dataCard.likes;
        };
        const dislikes = (dataCard, elCountDislike) => {
          dataCard.dislikes += 1;
          elCountDislike.textContent = dataCard.dislikes;
        };
        
        elemNewCard.btnLike.addEventListener('click', () => { likes(dataCard, elemNewCard.elCountLike) });
        elemNewCard.btnDislike.addEventListener('click', () => { dislikes(dataCard, elemNewCard.elCountDislike) });

        const popupEditCard = new PopupEditeCard('modal-edite-card')
        const btnEditCard = elemNewCard.elCard.querySelector('.btn-edite');
        btnEditCard.addEventListener('click', () => {
          popupEditCard.openPopup()
        })

        const popupDeleteCard = new PopupDeleteCard('modal-delete-card')
        const btnDeleteCard = elemNewCard.elCard.querySelector('.btn-delete');
        btnDeleteCard.addEventListener('click', () => {
          popupDeleteCard.openPopup()
        })



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