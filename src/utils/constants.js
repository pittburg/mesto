export const popupEditClass = document.querySelector('.popup_edit');
export const popupAddClass = document.querySelector('.popup_add');
export const popupConfirmClass = document.querySelector('.popup_confirm');
export const popupAvatarClass = document.querySelector('.popup_avatar');
export const editButton = document.querySelector('.profile__button_edit');
export const addButton = document.querySelector('.profile__button_add');
export const avatarButton = document.querySelector('.profile__avatar-button');
export const formAdd = document.querySelector('.popup__form_add');
export const formEdit = document.querySelector('.popup__form_edit');
export const formAvatar = document.querySelector('.popup__form_avatar');
export const fieldName = document.querySelector('.popup__input_type_name');
export const fieldAbout = document.querySelector('.popup__input_type_about');
export const fieldPlace = document.querySelector('.popup__input_type_place');
export const fieldLink = document.querySelector('.popup__input_type_link');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const avatar = document.querySelector('.profile__avatar');
export const popupModal = document.querySelector('.popup_modal');
export const gallery = document.querySelector('.cards-grid');
export const templateItem = document.querySelector('.template').content;
export const initialCards = [
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

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  popupOpenClass: 'popup_opened'
}