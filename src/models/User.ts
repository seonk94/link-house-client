export default class User {
  public _id: string;

  public email: string;

  public password: string;

  public name: string;

  constructor(user: User) {
    this._id = user._id;
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
  }
}
