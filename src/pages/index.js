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
popupModal, gallery, templateItem, initialCards, config} from '../utils/constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: 'f5a0177a-689d-461c-8da0-42fcda5fb7c6',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
.then( (data) => {
  console.log('юзер', data)
})

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

// Модальное окно
function openModal(caption, url) {
  const popupWithImage = new PopupWithImage(config, popupModal);
  popupWithImage.open(caption, url);
  popupWithImage.setEventListeners();
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
  userInfo.setUserInfo(user);
  popupEdit.close();
}

// добавить новую карточку
function addNewCard(data) {
  section.addItem(createCard({
    name: data.place,
    link: data.link
  }));
  popupAdd.close();
}
// большое спасибо за ревью

// слушатели кнопок
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);