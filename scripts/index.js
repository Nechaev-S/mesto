const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".popup__save-button");
const popup = document.querySelector(".popup");

function toggLePopup() {
    popup.classList.toggle("popup_is-opened");
}

popupButton.addEventListener("click", toggLePopup);
closeButton.addEventListener("click", toggLePopup);

// function popupOpen() {
//     editPopup.classList.add("popup_opened")
//   }

function popupClose() {
    popup.classList.remove("popup_is-opened")
  }

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__text_check_name");
let jobInput = document.querySelector(".popup__text_check_job");

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameInput = document.querySelector(".popup__text_check_name");
    let jobInput = document.querySelector(".popup__text_check_job");
    let profileName = document.querySelector(".profile__name");
    let profileJob = document.querySelector(".profile__job");
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupClose();
}



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
saveButton.addEventListener('click', formSubmitHandler)