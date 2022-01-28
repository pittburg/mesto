class Card {
  constructor(item, userId, template, openModal, openConfirm) {
    this._item = item;
    // this._itemId = item._id;
    
    this._userId = userId;
    this._view = template.querySelector('.card').cloneNode(true);
    this._openModal = openModal;
    this._openConfirm = openConfirm;
    this._trashIcon = this._view.querySelector('.card__trash')
  }

  _toggleLike(event) {
    event.target.classList.toggle('card__like_active');
  }
     
  _deleteCard(event) {
    event.target.closest('.card').remove();
  }

  
  _addListeners() {
    this._view.querySelector('.card__like').addEventListener('click', this._toggleLike);
    this._trashIcon.addEventListener('click', this._deleteCard);
    this._view.querySelector('.card__photo').addEventListener('click', () => this._openModal(this._item.name, this._item.link));
  }

  _checkId() {
    if (this._userId !== this._item.owner._id) {
      this._trashIcon.remove();
    }
  }

  render() {
    this._view.querySelector('.card__title').textContent = this._item.name;
    this._view.querySelector('.card__like-counter').textContent = this._item.likes.length;
    this._photo = this._view.querySelector('.card__photo');
    this._photo.src = this._item.link;
    this._photo.alt = this._item.name;
    this._checkId();
    this._addListeners();
    return this._view;
  }
}

export default Card;