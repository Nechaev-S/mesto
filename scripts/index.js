const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_check_name");
const jobInput = document.querySelector(".popup__text_check_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function toggLePopup() {
  popup.classList.toggle("popup_is-opened");
  
  if (popup.classList.contains("popup_is-opened")) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggLePopup();
}

popupButton.addEventListener("click", toggLePopup);
closeButton.addEventListener("click", toggLePopup);
formElement.addEventListener('submit', formSubmitHandler);