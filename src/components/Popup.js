class Popup {
  constructor(config, component) {
   this._config = config;
   this._component = component;
   this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
   this._component.classList.add(this._config.popupOpenClass);
   document.addEventListener('keydown', this._handleEscClose);
  }
 
  close() {
   this._component.classList.remove(this._config.popupOpenClass);
   document.addEventListener('keydown', this._handleEscClose);
  }
 
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleClickClose(event) {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    }
    if (event.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  setEventListeners() {
    this._component.addEventListener('click', (event) => this._handleClickClose(event));
  }
 }
 
 export default Popup;