
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

const inputText = document.querySelector('#text');
const inputEmail = document.querySelector('#email');

const buttonOpen = document.querySelector('.btn-create-new-card');
const buttonClose = document.querySelector('#button-close');
const buttonSend = document.querySelector('#send');

let openModal = false;
let valueInputText = '';
let valueInputEmail = '';

// const inputTextValue = inputText.value;

function handleClickModal(open) {
    return () => {
        if (open) {
            // openModal = true;
            modal.style.display = 'flex'
        } else {
            // openModal = false;
            modal.style.display = 'none'
            inputText.value = '';
            inputEmail.value = '';
        }
    }
    
}


buttonOpen.addEventListener('click', handleClickModal(true))
buttonClose.addEventListener('click', handleClickModal(false))

inputText.addEventListener('input', (event)=> {
    valueInputText = event.target.value;
})
inputEmail.addEventListener('input', (event)=> {
    valueInputEmail = event.target.value;
})

modal.addEventListener('click', handleClickModal(false));
modalContent.addEventListener('click', (event) => {
    event.stopPropagation()
})

buttonSend.addEventListener('click', ()=>{
    alert(JSON.stringify({
        valueInputText,
        valueInputEmail,
    })
        
    )
})




