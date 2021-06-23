const popupElement = document.querySelector('.popup')
const profileElement = document.querySelector('.profile')

const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const popupOpenButtonElement = document.querySelector('.profile__edit-button')

const openPopup = function () {
    popupElement.classList.add('popup_is_opened')
}
const closePopup = function () {
    popupElement.classList.remove('popup_is_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
