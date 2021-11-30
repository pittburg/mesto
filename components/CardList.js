class CardList {
  constructor(gallery, initialCards, createCard) {
    this._gallery = gallery;
    this._initialCards = initialCards;
    this._createCard = createCard;
  }
 
  addItem(item) {
    const card = this._createCard(item);
    const view = card.render();
    this._gallery.prepend(view);
  }
}
 
export default CardList;