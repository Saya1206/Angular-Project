export class Post {
  constructor(
    public title: String,
    public description: String,
    public imagePath: String,
    public author: String,
    public datetimeCreated: Date,
    public numberOfLikes : number
  ) {}
}
