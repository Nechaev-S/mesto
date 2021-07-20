const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function toggLePopup() {
    // console.log("click", popup);
    popup.classList.toggle("popup_is-opened");
}

popupButton.addEventListener("click", toggLePopup);
closeButton.addEventListener("click", toggLePopup);

