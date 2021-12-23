import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const popupEditClass = document.querySelector('.popup_edit');
const popupAddClass = document.querySelector('.popup_add');
const editButton = document.querySelector('.profile__button_edit');
const addButton = document.querySelector('.profile__button_add');
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');
const fieldName = document.querySelector('.popup__input_type_name');
const fieldAbout = document.querySelector('.popup__input_type_about');
const fieldPlace = document.querySelector('.popup__input_type_place');
const fieldLink = document.querySelector('.popup__input_type_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupModal = document.querySelector('.popup_modal');
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
  errorClass: 'popup__error_visible',
  popupOpenClass: 'popup_opened'
}


const popupWithImage = new PopupWithImage(config, popupModal);
popupWithImage.setEventListeners();

const popupAdd = new PopupWithForm(config, popupAddClass, addNewCard);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(config, popupEditClass, submitFormEdit);
popupEdit.setEventListeners();

//галлерея карточек 
const section = new Section({items: initialCards, renderer: createCard}, gallery);
section.renderCards();

const userInfo = new UserInfo(profileTitle, profileSubtitle);

//валидация формы добавления карточки
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

//валидация формы редактирования карточки
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// создание карточки
function createCard(item) {
  const card = new Card(item, templateItem, openModal);
  const renderCard = card.render();
  return renderCard;
}

// Модальное окно - по событию ищет значения для ссылки и заголовка, подставляет их в попап и открывает его
function openModal(event) {
  popupWithImage.open(event);
}

// открывает попап редактирования, подставляя значения профиля в поля инпутов, проверяет элементы формы
function editPopup() {
  popupEdit.open(popupEditClass);
  const user = userInfo.getUserInfo();
  fieldName.value = user.name;
  fieldAbout.value = user.about;
  formEditValidator.checkForm();
}

// открывает попап добавления карточек, проверяет элементы формы
function addPopup() {
  popupAdd.open(popupAddClass);
  document.querySelector('.popup__form_add').reset();
  formAddValidator.checkForm();
}

// записывает новые данные пользователя, закрывает попап
function submitFormEdit(user) {
  userInfo.setUserInfo(user);
  popupEdit.close(popupEditClass);
}

// добавляет новую карточку
function addNewCard() {
  const name = fieldPlace.value;
  const link = fieldLink.value;
  const item = {name, link};
  section.addItem(createCard(item));
  popupAdd.close();
}


// слушатели кнопок
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);