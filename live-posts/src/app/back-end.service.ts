import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

// data-path
// https://live-posts-d30d9-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //fun-1 Save
  saveData() {
    //step 1 - get list of posts form post.service
    const listOfPosts: Post[] = this.postService.getPosts();

    //step 2 - send list of posts to backend
    this.http.put(
      'https://posts-fa041-default-rtdb.firebaseio.com/posts.json',
      listOfPosts
    ).subscribe((res)=>{
        console.log(res);
    });
  }

  //fun-2 Fetch
  fetchData(){
    this.http
    .get<Post[]>('https://posts-fa041-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      tap((listOfPosts:Post[])=>{
        console.log(listOfPosts);

        //Step 2 - send to post.service
      })
    )
    .subscribe();
  }
}
