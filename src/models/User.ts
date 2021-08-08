export default class User {
  public email: string;

  public password: string;

  public name: string;

  constructor(
    user: User,
  ) {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
  }
}
