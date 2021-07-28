export default class Link {
  public id: string;

  public url: string;

  public title: string;

  public grade: number;

  constructor(
    link: Pick<Link, 'id' | 'url'> & Partial<Link>,
  ) {
    this.id = link.id;
    this.url = link.url;
    this.title = link.title || '';
    this.grade = link.grade || 0;
  }
}
