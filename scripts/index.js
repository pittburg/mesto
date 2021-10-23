const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupEditCloseButton = document.querySelector('.popup__close_edit');
const popupAddCloseButton = document.querySelector('.popup__close_add');
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
const popupModalCloseButton = document.querySelector('.popup__close_modal');



function openPopup(el) {
  el.classList.add('popup_opened');
}

function closePopup(el) {
  el.classList.remove('popup_opened');
}


function editPopup() {
  openPopup(popupEdit);
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
}

function addPopup() {
  openPopup(popupAdd);
  fieldPlace.value = '';
  fieldLink.value = '';
}

function submitFormEdit(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup(popupEdit);
 }


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

const gallery = document.querySelector('.cards-grid');
const templateItem = document.querySelector('.template').content;

initialCards.reverse().forEach(addCard);

function likeToggle(event) {
  event.target.classList.toggle('card__like_active');
}; // переключение лайков

function deleteCard(event) {
  event.target.closest('.card').remove();
}; // удаление карточек

function createCard(item){
  const card = templateItem.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = item.name;
  card.querySelector('.card__photo').src = item.link;
  card.querySelector('.card__trash').addEventListener('click', deleteCard);
  card.querySelector('.card__like').addEventListener('click', likeToggle);
  
  return card;
};

function addCard(item){
  const card = createCard(item);
  gallery.prepend(card);
};

function submitFormAdd(event) {
  event.preventDefault();
  const name = fieldPlace.value;
  const link = fieldLink.value;
  addCard({name, link});
  event.target.reset();
  closePopup(popupAdd);
 }

const image = document.querySelector('.card__photo');

function bigImage(event) {
  event.preventDefault();
  const caption = event.target.offsetParent.nextElementSibling.innerText;
  const url = event.target.src;
  document.querySelector('.popup__photo').src = url;
  document.querySelector('.popup__caption').textContent = caption;
  openPopup(popupModal);
}

const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; ++i) {
  let image = images[i];
  image.addEventListener('click', bigImage);
}


addButton.addEventListener('click', addPopup);
editButton.addEventListener('click', editPopup);
popupModalCloseButton.addEventListener('click', () => closePopup(popupModal));
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);