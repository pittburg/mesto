class Section {
  constructor(data, gallery) {
    this._items = data.items;
    this._renderer = data.renderer;
    this._gallery = gallery;
  }
 
  addItem(item) {
    this._gallery.prepend(item);
  }

  renderCards() {
    this._items.reverse().forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

}

export default Section;