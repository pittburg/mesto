const popups = document.querySelectorAll('.popup')
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
const bigImage = document.querySelector('.popup__photo');
const image = document.querySelector('.card__photo');
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

// открывает попап добавляя класс, слушает закрытие на Esc и оверлей
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupToEsc);
  // document.addEventListener('mousedown', closePopupToOverlay);
}
// закрывает попап удаляя класс, снимает слушатели закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupToEsc);
  // document.removeEventListener('mousedown', closePopupToOverlay);
}

// открывает попап редактирования, подставляя значения профиля в поля инпутов, проверяет элементы формы
function editPopup() {
  openPopup(popupEdit);
  fieldName.value = profileTitle.textContent;
  fieldAbout.value = profileSubtitle.textContent;
  checkForm(formEdit, config);
}
// открывает попап добавления карточек, проверяет элементы формы
function addPopup() {
  openPopup(popupAdd);
  popupAdd.reset();
  checkForm(formAdd, config);
}
// отправляет форму редактирования, подставляя значения инпутов в поля профиля, закрывает попап
function submitFormEdit(event) {
  event.preventDefault();
  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
  closePopup(popupEdit);
 }

// отправляет форму добавления карточек, значения из инпутов записывает в переменные и передает как объект функции
// добавления карточек, закрывает попап 
function submitFormAdd(event) {
  event.preventDefault();
  const name = fieldPlace.value;
  const link = fieldLink.value;
  addCard({name, link});
  event.target.reset();
  closePopup(popupAdd);
}

function toggleLike(event) {
  event.target.classList.toggle('card__like_active');
} // переключение лайков

function deleteCard(event) {
  event.target.closest('.card').remove();
} // удаление карточек

// Модальное окно - по событию ищет значения для ссылки и заголовка, подставляет их в попап и открывает его
function openModal(event) {
  const caption = event.target.offsetParent.nextElementSibling.textContent;
  const url = event.target.src;
  bigImage.src = url;
  bigImage.alt = caption;
  document.querySelector('.popup__caption').textContent = caption;
  openPopup(popupModal);
}

// закрыть попап на Esc
function closePopupToEsc(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрыть попап на оверлей и крестик
popups.forEach((popup) => {
    popup.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (event.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})

// слушатели кнопок
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);

// создание карточек - находит класс .card и клонирует со всем содержимым, подставляет значения заголовка и ссылку,
// добавляет слушатели по клику на удаление карточки и переключение лайков
function createCard(item){
  const card = templateItem.querySelector('.card').cloneNode(true);
  const photo = card.querySelector('.card__photo');
  card.querySelector('.card__title').textContent = item.name;
  photo.src = item.link;
  photo.alt = item.name;
  photo.addEventListener('click', openModal);
  card.querySelector('.card__trash').addEventListener('click', deleteCard);
  card.querySelector('.card__like').addEventListener('click', toggleLike);
  return card;
}

// дабавляет карточки в начало галлереи
function addCard(item){
  const card = createCard(item);
  gallery.prepend(card);
}

// перебор массива в обратном порядке и к каждому объекту применяется функция addCard
initialCards.reverse().forEach(addCard);