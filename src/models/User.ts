export default class User {
  public email: string;

  public password: string;

  constructor(
    user: User,
  ) {
    this.email = user.email;
    this.password = user.password;
  }
}
