const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__button_edit');
const form = document.querySelector('.popup__form');
const fieldName = document.querySelector('.popup__input_name');
const fieldAbout = document.querySelector('.popup__input_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup();
 }

 form.addEventListener('submit', submitForm);