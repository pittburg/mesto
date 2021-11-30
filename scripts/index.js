import Card from '../components/Card.js';
import CardList from '../components/CardList.js';
import FormAddCard from '../components/FormAddCard.js';
import FormValidator from '../components/FormValidator.js';

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editButton = document.querySelector('.profile__button_edit');
const addButton = document.querySelector('.profile__button_add');
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');
const fieldName = document.querySelector('.popup__input_type_name');
const fieldAbout = document.querySelector('.popup__input_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupModal = document.querySelector('.popup_modal');
const bigImage = document.querySelector('.popup__photo');
const gallery = document.querySelector('.cards-grid');
const templateItem = document.querySelector('.template').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1551709076-89f2499d383b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
} 

//галлерея карточек 
const cardList = new CardList(gallery, initialCards, createCard);

//форма добавления карточек
const formAddCard = new FormAddCard(formAdd, addItem);
formAddCard.addListener();

//валидация формы добавления карточки
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

//валидация формы редактирования карточки
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// создание карточки
function createCard(item) {
  const card = new Card(item, templateItem, openModal);
  return card; 
}

// Модальное окно - по событию ищет значения для ссылки и заголовка, подставляет их в попап и открывает его
function openModal(event) {
  const caption = event.target.offsetParent.nextElementSibling.textContent;
  const url = event.target.src;
  bigImage.src = url;
  bigImage.alt = caption;
  document.querySelector('.popup__caption').textContent = caption;
  openPopup(popupModal);
}

// добавить карточку
function addItem(item) {
  cardList.addItem(item);
  closePopup(popupAdd);
}
// добавить массив карточек
initialCards.forEach((item) => {
  cardList.addItem(item);
})


// открывает попап добавляя класс, слушает закрытие на Esc и оверлей
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupToEsc);
}
// // закрывает попап удаляя класс, снимает слушатели закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupToEsc);
}
// открывает попап редактирования, подставляя значения профиля в поля инпутов, проверяет элементы формы
function editPopup() {
  openPopup(popupEdit);
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
  formEditValidator.checkForm();
}
// открывает попап добавления карточек, проверяет элементы формы
function addPopup() {
  openPopup(popupAdd);
  document.getElementById('popup-add').reset();
  formAddValidator.checkForm();
}
// отправляет форму редактирования, подставляя значения инпутов в поля профиля, закрывает попап
function submitFormEdit(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup(popupEdit);
}

// закрыть попап на Esc
function closePopupToEsc(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрыть попап на оверлей и крестик
popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (event.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

// слушатели кнопок
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);
formEdit.addEventListener('submit', submitFormEdit);