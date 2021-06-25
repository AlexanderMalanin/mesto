// Выборка DOM элементов, объявление переменных
const popupElement = document.querySelector('.popup')
const profileElement = document.querySelector('.profile')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElementNameInput = popupElement.querySelector('.popup__item_type_name')
const popupElementJobInput = popupElement.querySelector('.popup__item_type_job')
const profileName = profileElement.querySelector('.profile__title')
const profileJob = profileElement.querySelector('.profile__subtitle')
const popupFormElement = popupElement.querySelector('.popup__form')

// Функция открытия/закрытия попапа
const openPopup = function () {
    popupElement.classList.add('popup_is-opened')
    popupElementNameInput.value = profileName.textContent
    popupElementJobInput.value = profileJob.textContent
}
const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
}

const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = profileName.value
    profileJob.textContent = profileJob.value
    closePopup()
}

// Регистрация обработчика событий по клику
popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupFormElement.addEventListener('submit', formSubmitHandler);
