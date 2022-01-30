class UserInfo {
  constructor ( profileTitle, profileSubtitle, avatar) {
    this._name = profileTitle;
    this._about = profileSubtitle;
    this._avatar = avatar;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src
    };
    return user;
  }

  setUserInfo(user) {
    this._name.textContent = user.name;
    this._about.textContent = user.about;
    this._avatar.src = user.avatar;
  }
}

export default UserInfo;