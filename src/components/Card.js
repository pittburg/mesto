class Card {
  constructor(item, userId, template, openModal, openConfirm, api) {
    this._item = item;
    this._userId = userId;
    this._view = template.querySelector('.card').cloneNode(true);
    this._openModal = openModal;
    this._openConfirm = openConfirm;
    this._trashIcon = this._view.querySelector('.card__trash');
    this._likeButton = this._view.querySelector('.card__like');
    this._numberOfLikes = this._view.querySelector('.card__like-counter');
    this._cardTitle = this._view.querySelector('.card__title');
    this._photo = this._view.querySelector('.card__photo');
    this._api = api;
  }

  _toggleLike(data) {
    this._numberOfLikes.textContent = data.likes.length;
    this._likeButton.classList.toggle('card__like_active');
  }

  deleteCard(item) {
    this._view.remove(item._id);
  }

  _setLike(item) {
    this._api.setLike(item)
      .then(data => this._toggleLike(data))
      .catch((err) => {
        console.log(`Что-то не так: ${err}`);
      })
  }


  _deleteLike(item) {
    this._api.deleteLike(item)
      .then(data => this._toggleLike(data))
      .catch((err) => {
        console.log(`Что-то не так: ${err}`);
      })
  }


  _checkTrashIcon() {
    if (this._userId !== this._item.owner._id) {
      this._trashIcon.remove();
    }
  }

  _checkLike() {
    this._item.likes.forEach((user) => {
      if (this._userId === user._id) {
        this._likeButton.classList.add('card__like_active');
      }
    })
  }


  _addListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like_active')) {
        this._deleteLike(this._item);
      } 
      else {
        this._setLike(this._item);
      }
    });

    this._trashIcon.addEventListener('click', () => {
      this._openConfirm(this._item);
    });

    this._photo.addEventListener('click', () => this._openModal(this._item.name, this._item.link));
  }

  

  render() {
    this._cardTitle.textContent = this._item.name;
    this._numberOfLikes.textContent = this._item.likes.length;
    this._photo.src = this._item.link;
    this._photo.alt = this._item.name;
    this._checkTrashIcon();
    this._checkLike();
    this._addListeners();
    return this._view;
  }
}

export default Card;