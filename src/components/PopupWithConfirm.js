import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(config, component) {
    super(config, component)
    this._form = this._component.querySelector('.popup__form');
  }


  handlerSubmit(data) {
    this._submitForm = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm();
    });
  }

}

export default PopupWithConfirm;