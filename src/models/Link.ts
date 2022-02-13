export default class Link {
  public _id: string;

  public url: string;

  public uri: string;

  public title: string;

  public description: string;

  public date: string;

  public author: string;

  public image: string | null;

  public grade: number;

  public watchAt: string | null;

  constructor(
    link: Pick<Link, '_id' | 'uri'> & Partial<Link>,
  ) {
    this._id = link._id || new Date().getTime().toString();
    this.uri = link.uri;
    this.url = link.url || '';
    this.title = link.title || '';
    this.date = link.date || '';
    this.author = link.author || '';
    this.image = link.image || null;
    this.description = link.description || '';
    this.grade = link.grade || 0;
    this.watchAt = link.watchAt || null;
  }
}
