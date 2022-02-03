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

// модальное окно
const popupWithImage = new PopupWithImage(config, popupModal);

// попап подтверждения удаления
const popupConfirmation = new PopupWithConfirm(config, popupConfirmClass)
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

// создание карточки
function createCard(item) {
  const card = new Card(item, userId, templateItem, openModal,{
    openConfirm: (data) => {
      console.log(data._id)
      popupConfirmation.open();
      popupConfirmation.handlerSubmit(() => {
        api.deleteCard(data)
          .then(()=> {
            card.deleteCard(data)
            popupConfirmation.close()
          })
          .catch((err) => {
            console.log(`Что-то не так: ${err}`)
          })
      })
    }
  }, api)
  const renderCard = card.render();
  return renderCard;
}

// открыть модальное окно
function openModal(caption, url) {
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

// открывает попап редактирования аватара, проверяет элементы формы
function editAvatar() {
  popupEditAvatar.open();
  formAvatarValidator.checkForm();
}

// установить аватар
function submitFormAvatar(data) {
  popupEditAvatar.renderLoading(true);
  api.setAvatar(data)
    .then((user) => {
      userInfo.setUserInfo(user)
      popupEditAvatar.close()
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`)
    })
    .finally( () => {
      popupEditAvatar.renderLoading(false)
    });
}


// записывает новые данные пользователя, закрывает попап
function submitFormEdit(user) {
  popupEdit.renderLoading(true);
  api.setUserInfo(user)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupEdit.close();
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`)
    })
    .finally( () => {
      popupEdit.renderLoading(false);
    });
}

// добавить новую карточку
function addNewCard(data) {
  popupAdd.renderLoading(true);
  api.addCard(data)
    .then((data) => {
      section.addItem(createCard(data))
      popupAdd.close();
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`)
    })
    .finally( () => {
      popupAdd.renderLoading(false)
    });
}

// слушатели кнопок
avatarButton.addEventListener('click', editAvatar);
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);