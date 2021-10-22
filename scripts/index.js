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
const popupImage = document.querySelector('.popup_img');
const popupCloseImg = document.querySelector('.popup__close_img');




function openPopup(el) {
  el.classList.add('popup_opened');
}

function closePopup() {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
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
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
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
  const caption = event.target.nextElementSibling.innerText;
  const getSrc = event.target.src;
  document.querySelector('.figure__img').src = getSrc;
  document.querySelector('.popup__caption').textContent = caption;
  openPopup(popupImage);
}

const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; ++i) {
  let image = images[i];
  image.addEventListener('click', bigImage);
}



addButton.addEventListener('click', addPopup);
editButton.addEventListener('click', editPopup);
popupCloseImg.addEventListener('click', closePopup);
popupEditCloseButton.addEventListener('click', closePopup);
popupAddCloseButton.addEventListener('click', closePopup);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);