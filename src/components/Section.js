class Section {
  constructor({renderer}, gallery) {
    this._renderer = renderer;
    this._gallery = gallery;
  }
 
  addItem(item) {
    this._gallery.prepend(item);
  }

  renderCards(data) {
    data.reverse().forEach((item) => {
      this._renderer(item);
    })
  }
}

export default Section;