import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(config, component) {
    super(config, component);
    this._image = this._component.querySelector('.popup__photo');
    this._caption = this._component.querySelector('.popup__caption');
  }

  open(caption, url) {
    super.open();
    this._caption.textContent = caption;
    this._image.src = url;
    this._image.alt = caption;
  }
}

export default PopupWithImage;