class UserInfo {
  constructor ( profileTitle, profileSubtitle) {
    this._name = profileTitle;
    this._about = profileSubtitle;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent
    };
    return user;
  }

  setUserInfo(user) {
    this._name.textContent = user.name;
    this._about.textContent = user.about;
  }
}

export default UserInfo;