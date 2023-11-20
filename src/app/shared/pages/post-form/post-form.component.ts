import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  router = inject(Router)
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
    console.log('dd')
    const post: IPost = this.newPost.value
    post.id = this.postsService.currentId++;
    post.date = new Date();
    let response = this.postsService.create(post)
    console.log(response)
    this.router.navigate([`/posts/${post.id}`])

    // TAMPOCO FUNCIONA
  }

}
