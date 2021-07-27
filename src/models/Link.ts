export default class Link {
  public id: string;

  public url: string;

  public grade: number;

  constructor(
    link: Link,
  ) {
    this.id = link.id;
    this.url = link.url;
    this.grade = link.grade;
  }
}
