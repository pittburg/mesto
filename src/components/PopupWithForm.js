import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(config, component, submitForm) {
    super(config, component)
    this._form = this._component.querySelector('.popup__form');
    this._inputs = this._component.querySelectorAll('.popup__input');
    this._submitForm = submitForm;
    this._popupButton = this._form.querySelector('.popup__button');
    this._popupButtonText = this._popupButton.textContent;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    }
    else {
      this._popupButton.textContent = this._popupButtonText;
    }
  }


  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
    this._inputValues[input.name] = input.value;
  });
    return this._inputValues;
  }

  _handlerSubmit(event) {
    event.preventDefault();
    this._submitForm(this._getInputValues());
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => this._handlerSubmit(event));
  }
}

export default PopupWithForm;