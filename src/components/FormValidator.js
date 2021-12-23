class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._errorClass = config.errorClass;
    this._form = form;
    
  }

  _handleSubmit(event) {
    event.preventDefault();
  }
  
// переключить состояние кнопки
  _toggleButtonState() {
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._button.disabled = !this._form.checkValidity();
    this._button.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
  }

  // показать ошибку
  _showError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
  // скрыть ошибку
  _hideError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = ''; 
  }
  // валидировать состояние инпутов
  _handleFieldValidation(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
        this._hideError(input );
    }
  }

  // сбросить ошибки для инпутов
  _resetError() {
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
    this._inputs.forEach((input) => this._hideError(input));
  }
  // проверить форму - сбросить ошибки и переключить кнопку
  checkForm() {
    this._resetError();
    this._toggleButtonState();
  }
  // установить слушатели на форму
  _setFormListeners() {
    this._form.addEventListener('submit', this._handleSubmit);
    this._form.addEventListener('input', () => this._toggleButtonState());
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => this._handleFieldValidation(input));
    });
  
    this._toggleButtonState();
  }
  // включить валидацию
  enableValidation() {
   this._setFormListeners();
  }
}

export default FormValidator;