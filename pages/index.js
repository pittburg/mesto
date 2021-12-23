import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {popupEditClass, popupAddClass, editButton, addButton,formAdd, formEdit,
fieldName, fieldAbout, fieldPlace, fieldLink, profileTitle,profileSubtitle,
popupModal, gallery, templateItem, initialCards, config} from '../utils/constants.js';


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