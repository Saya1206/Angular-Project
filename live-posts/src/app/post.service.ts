import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      `Nature, in the broadest sense, is the physical world or universe. Nature can
        refer to the phenomena of the physical world, and also to life in general. The
        study of nature is a large, if not the only, part of science. Although humans
        are part of nature, human activity is often understood as a separate category
        from other natural phenomena.`,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
      'nature.com',
      new Date(),
      5
    ),
    new Post(
      'Hampi',
      `Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is a historical delight for travellers. Surrounded by 500 ancient monuments, beautiful temples, bustling street markets, bastions, treasury building and captivating remains of Vijayanagar Empire, Hampi is a backpacker's delight.`,
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi5SHtnqvthZbCbl5InC4carA7Y1Mc2bz2d_qDeftx7iuvit_h9zM-XIrkImQFSZSG-SorMiLu2n0Eky5i7Hg6CKqIgF4y2YQgEM9GRA',
      'hampi.com',
      new Date(),
      2
    ),
    new Post(
      'Lauterbrunnen Valley',
      `Lauterbrunnen is situated in one of the most impressive trough valleys in the Alps, between gigantic rock faces and mountain peaks. With its 72 thundering waterfalls, secluded valleys, colourful alpine meadows and lonely mountain inns, the Lauterbrunnen Valley is one of the biggest nature conservation areas in Switzerland.`,
      'https://lh5.googleusercontent.com/p/AF1QipOe28RM0Oa-EjdoNb3ZVhfqrHk6OEEZVZLWGCkQ=w675-h390-n-k-no',
      'valley.com',
      new Date(),
      3
    ),
  ];

  //facility 1
  getPosts() {
    return this.listOfPosts;
  }

  //facility 2
  deletePosts(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  //facility 3
  addPosts(post: Post) {
    this.listOfPosts.push(post);
  }

  //facility 4
  updatePosts(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  //facility 5
  getPost(index:number)
  {
    return this.listOfPosts[index];
  }

  //facility 6
  likePosts(index:number)
  {
    return this.listOfPosts[index].numberOfLikes += 1;
  }
}
