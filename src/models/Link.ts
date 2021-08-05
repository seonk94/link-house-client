export default class Link {
  public id: string;

  public url: string;

  public uri: string;

  public title: string;

  public description: string;

  public date: string;

  public author: string;

  public image: string | null;

  public grade: number;

  constructor(
    link: Pick<Link, 'id' | 'uri'> & Partial<Link>,
  ) {
    this.id = link.id || new Date().getTime().toString();
    this.uri = link.uri;
    this.url = link.url || '';
    this.title = link.title || '';
    this.date = link.date || '';
    this.author = link.author || '';
    this.image = link.image || null;
    this.description = link.description || '';
    this.grade = link.grade || 0;
  }
}
