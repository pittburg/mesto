import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {popupEditClass, popupAddClass, editButton, addButton,formAdd, formEdit,
fieldName, fieldAbout, fieldPlace, fieldLink, profileTitle,profileSubtitle,
popupModal, gallery, templateItem, config} from '../utils/constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: 'f5a0177a-689d-461c-8da0-42fcda5fb7c6',
    'Content-Type': 'application/json'
  }
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, initialCards]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    section.renderCards(initialCards);
  })


const popupAdd = new PopupWithForm(config, popupAddClass, addNewCard);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(config, popupEditClass, submitFormEdit);
popupEdit.setEventListeners();

//галлерея карточек 
const section = new Section({
  renderer: (data) => {
    section.addItem(createCard(data));
  },
}, gallery);


const userInfo = new UserInfo(profileTitle, profileSubtitle);

//валидация формы добавления карточки
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

//валидация формы редактирования карточки
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// создание карточки
function createCard(item) {
  const card = new Card(item, userId, templateItem, openModal);
  const renderCard = card.render();
  return renderCard;
}

// Модальное окно
function openModal(caption, url) {
  const popupWithImage = new PopupWithImage(config, popupModal);
  popupWithImage.open(caption, url);
  popupWithImage.setEventListeners();
}

function openConfirm() {
  popupConfirmation = new PopupWithForm(config, popupConfirmClass, submit)
}

// открывает попап редактирования, подставляя значения профиля в поля инпутов, проверяет элементы формы
function editPopup() {
  popupEdit.open();
  const user = userInfo.getUserInfo();
  fieldName.value = user.name;
  fieldAbout.value = user.about;
  formEditValidator.checkForm();
}

// открывает попап добавления карточек, проверяет элементы формы
function addPopup() {
  popupAdd.open();
  formAddValidator.checkForm();
}

// записывает новые данные пользователя, закрывает попап
function submitFormEdit(user) {
  api.setUserInfo(user)
    .then((data) => {
      userInfo.setUserInfo(data);
    })
  popupEdit.close();
}

// добавить новую карточку
function addNewCard(data) {
  api.addCard(data)
    .then((data) => {
      section.addItem(createCard(data));
    });
  popupAdd.close();
}

// слушатели кнопок
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);