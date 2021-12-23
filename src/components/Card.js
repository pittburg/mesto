class Card {
  constructor(item, template, openModal) {
    this._item = item;
    this._view = template.querySelector('.card').cloneNode(true);
    this._openModal = openModal;
  }

  _toggleLike(event) {
    event.target.classList.toggle('card__like_active');
  }
     
  _deleteCard(event) {
    event.target.closest('.card').remove();
  }

  
  _addListeners() {
    this._view.querySelector('.card__like').addEventListener('click', this._toggleLike);
    this._view.querySelector('.card__trash').addEventListener('click', this._deleteCard);
    this._view.querySelector('.card__photo').addEventListener('click', (event) => this._openModal(event));
  }

  render() {
    this._view.querySelector('.card__title').textContent = this._item.name;
    this._photo = this._view.querySelector('.card__photo');
    this._photo.src = this._item.link;
    this._photo.alt = this._item.name;
    this._addListeners();
    return this._view;
  }
}

export default Card;
