const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function handleSubmit(event) {
  event.preventDefault();
}
// переключить состояния кнопки
function toggleButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}
// показать ошибку
function showError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}
// скрыть ошибку
function hideError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = ''; 
}
// валидировать состояние инпутов
function handleFieldValidation(input, form, config) {
  if (!input.validity.valid) {
    showError(input, form, config);
  } else {
    hideError(input, form, config);
  }
}
// сбросить ошибки для инпутов
function resetError(form, config) {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach((input) => hideError(input, form, config));
}
// проверить форму - сбросить ошибки и переключить кнопку
function checkForm(form, config) {
  resetError(form, config);
  toggleButtonState(form, config);
}
// установить слушатели на форму
function setFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', () => toggleButtonState(form, config));
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach((input) => {
    input.addEventListener('input', () => handleFieldValidation(input, form, config));
  });

  toggleButtonState(form, config);
}
// включить валидацию
function enableValidation(config) {
  const forms = [...document.querySelectorAll(config.formSelector)];
  forms.forEach((form) => setFormListeners(form, config));
}

enableValidation(config);