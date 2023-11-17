import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postsService = inject(PostsService)
  arrCategories: string[] = []
  newPost: FormGroup

  constructor() {
    this.newPost = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      author: new FormControl(),
      author_image: new FormControl(),
      image: new FormControl(),
      category: new FormControl(),
      tags: new FormControl()
    })
  }

  ngOnInit() {
    this.arrCategories = this.postsService.getCategories()
  }

  onSubmit() {
    this.postsService.create(this.newPost.value)
  }

}
