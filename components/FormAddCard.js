
class FormAddCard {
  constructor(form, addItem) {
    this._form = form;
    this._inputPlace = form.querySelector('.popup__input_type_place');
    this._inputLink = form.querySelector('.popup__input_type_link');
    this._addItem = addItem;
  }

  _addCard(event) {
    event.preventDefault();
    const name = this._inputPlace.value;
    const link =  this._inputLink.value;
    const item = {name, link};
    this._addItem(item);
    this._form.reset();
  }

  addListener() {
    this._form.addEventListener('submit', (event) => this._addCard(event));
  }
}

export default FormAddCard;