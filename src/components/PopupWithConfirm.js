import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(config, component, submitForm) {
    super(config, component)
    this._form = this._component.querySelector('.popup__form');
    this._submitForm = submitForm;
  }

  open(data) {
    super.open();
    this._data = data;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _handlerSubmit(event) {
    event.preventDefault();
    this._submitForm(this._data);
    this.removeEventListeners();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => this._handlerSubmit(event));
  }

  removeEventListeners() {
    this._component.removeEventListener('click', (event) => this._handleClickClose(event));
    this._form.removeEventListener('submit', (event) => this._handlerSubmit(event));
  }
}

export default PopupWithConfirm;