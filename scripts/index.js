const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".popup__save-button");
const popup = document.querySelector(".popup");

function toggLePopup() {
  popup.classList.toggle("popup_is-opened");
}

popupButton.addEventListener("click", toggLePopup);
closeButton.addEventListener("click", toggLePopup);

function popupClose() {
  popup.classList.remove("popup_is-opened")
}

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_check_name");
const jobInput = document.querySelector(".popup__text_check_job");

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__text_check_name");
  const jobInput = document.querySelector(".popup__text_check_job");
  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__job");
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);