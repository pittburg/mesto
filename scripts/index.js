const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__button_edit');
const form = document.querySelector('.popup__form');
const fieldName = document.querySelector('.popup__input_type_name');
const fieldAbout = document.querySelector('.popup__input_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup();
 }

 editButton.addEventListener('click', openPopup);
 popupCloseButton.addEventListener('click', closePopup);
 form.addEventListener('submit', submitForm);