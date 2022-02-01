import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {popupEditClass, popupAddClass, popupConfirmClass, editButton, addButton,formAdd, formEdit,
fieldName, fieldAbout, profileTitle,profileSubtitle, avatar, formAvatar, popupAvatarClass, avatarButton,
popupModal, gallery, templateItem, config} from '../utils/constants.js';

// данные для обращения к серверу
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: 'f5a0177a-689d-461c-8da0-42fcda5fb7c6',
    'Content-Type': 'application/json'
  }
});

let userId;
// запросить начальные данные с сервера и загрузить на страницу
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, initialCards]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    section.renderCards(initialCards);
  })
  .catch((err) => {
    console.log(`Что-то не так: ${err}`);
  })

// попап добавления карточки
const popupAdd = new PopupWithForm(config, popupAddClass, addNewCard);
popupAdd.setEventListeners();

// попап редактирования информации пользователя
const popupEdit = new PopupWithForm(config, popupEditClass, submitFormEdit);
popupEdit.setEventListeners();

// попап редактирования аватара
const popupEditAvatar = new PopupWithForm(config, popupAvatarClass, submitFormAvatar);
popupEditAvatar.setEventListeners();

// попап подтверждения удаления
const popupConfirmation = new PopupWithConfirm(config, popupConfirmClass, submitConfirm)
popupConfirmation.setEventListeners();


// галлерея карточек
const section = new Section({
  renderer: (data) => {
    section.addItem(createCard(data));
  },
}, gallery);

// данные пользователя
const userInfo = new UserInfo(profileTitle, profileSubtitle, avatar);

//валидация формы добавления карточки
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

//валидация формы редактирования карточки
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

//валидация формы редактирования аватара
const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();

let tempCard;
// создание карточки
function createCard(item) {
  const card = new Card(item, userId, templateItem, openModal, openConfirm, api)
  tempCard = card;
  const renderCard = card.render();
  return renderCard;
}

// Модальное окно
function openModal(caption, url) {
  const popupWithImage = new PopupWithImage(config, popupModal);
  popupWithImage.open(caption, url);
  popupWithImage.setEventListeners();
}

// открыть попап подверждения удаления карточки
function openConfirm(data) {
  popupConfirmation.open(data)
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

// открывает попап редактирования аватара, проверяет элементы формы
function editAvatar() {
  popupEditAvatar.open();
  formAvatarValidator.checkForm();
}

// удалить карточку
function submitConfirm(data) {
  api.deleteCard(data)
  .catch((err) => {
    console.log(`Что-то не так: ${err}`);
  })
  tempCard.deleteCard(data);
  popupConfirmation.close();
}

// установить аватар
function submitFormAvatar(data) {
  popupEditAvatar.renderLoading(true);
  api.setAvatar(data)
    .then((user) => {
      userInfo.setUserInfo(user);
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`);
    })
    .finally( () => {
      popupEditAvatar.renderLoading(false);
    });
  popupEditAvatar.close();
}



// записывает новые данные пользователя, закрывает попап
function submitFormEdit(user) {
  popupEdit.renderLoading(true);
  api.setUserInfo(user)
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`);
    })
    .finally( () => {
      popupEdit.renderLoading(false);
    });
  popupEdit.close();
}

// добавить новую карточку
function addNewCard(data) {
  popupAdd.renderLoading(true);
  api.addCard(data)
    .then((data) => {
      section.addItem(createCard(data));
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`);
    })
    .finally( () => {
      popupAdd.renderLoading(false);
    });
  popupAdd.close();
}

// слушатели кнопок
avatarButton.addEventListener('click', editAvatar);
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);