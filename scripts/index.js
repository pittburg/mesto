const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__button_edit');
const form = document.querySelector('.popup__form');
const fieldName = document.querySelector('.popup__input_type_name');
const fieldAbout = document.querySelector('.popup__input_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function openPopup() {
  popup.classList.add('popup_opened');
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup();
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

initialCards.forEach(addCard);

function createCard(item){
  const card = templateItem.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = item.name;
  card.querySelector('.card__photo').src = item.link;
  return card;
};

function addCard(item){
  const card = createCard(item);
  gallery.append(card);
};


 editButton.addEventListener('click', openPopup);
 popupCloseButton.addEventListener('click', closePopup);
 form.addEventListener('submit', submitForm);