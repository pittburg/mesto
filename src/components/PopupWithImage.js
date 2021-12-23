import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  
  open(event) {
    super.open();
    const bigImage = document.querySelector('.popup__photo');
    const caption = event.target.offsetParent.nextElementSibling.textContent;
    const url = event.target.src;
    bigImage.src = url;
    bigImage.alt = caption;
    document.querySelector('.popup__caption').textContent = caption;
  }
}

export default PopupWithImage;