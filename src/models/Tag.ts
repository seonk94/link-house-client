export default class Tag {
  public _id: string;

  public userId: string;

  public tags: string[];

  constructor(tag: Tag) {
    this._id = tag._id;
    this.userId = tag.userId;
    this.tags = tag.tags;
  }
}
