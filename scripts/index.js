const popupElement = document.querySelector('.popup')
const profileElement = document.querySelector('.profile')

const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const popupOpenButtonElement = document.querySelector('.profile__edit-button')

const popupElementNameInput = popupElement.querySelector('.popup__item_name')
const popupElementJobInput = popupElement.querySelector('.popup__item_job')

const profileName = profileElement.querySelector('.profile__title')
const profileJob = profileElement.querySelector('.profile__subtitle')

const popupFormElement = popupElement.querySelector('.popup__form')
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button')


const addTextProfile = function (evt) {
    evt.preventDefault();
    profileName.textContent = editName.value
    profileJob.textContent = edinJob.value
    closePopup()
}


const openPopup = function () {
    popupElement.classList.add('popup_is-opened')
}
const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupSubmitButtonElement.addEventListener('submit', addTextProfile);
