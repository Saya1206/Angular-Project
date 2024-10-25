import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlState,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title,
      [] = '';
    let description,
      [] = '';
    let imagePath,
      [] = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    //Ready with Object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'test.com',
      new Date(),
      0
    );

    //calling service
    if (this.editMode) {
      this.postService.updatePosts(this.index, post);
    } else {
      this.postService.addPosts(post);
    }

    //Navigate to /post-list
    this.router.navigate(['/post-list']);
  }
}
