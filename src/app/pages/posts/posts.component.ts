import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postsService = inject(PostsService)
  arrPosts: IPost[] = []

  ngOnInit() {
    this.arrPosts = this.postsService.getAll()
  }

  onClickFilter(cat: string) {
    if (cat !== '') {
      this.arrPosts = this.postsService.getByCategory(cat)
    } else {
      this.arrPosts = this.postsService.getAll()
    }
  }
}
