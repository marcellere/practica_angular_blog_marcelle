import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  postsService = inject(PostsService)
  postId!: number;
  post!: IPost | undefined;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['postId'];
      this.post = this.postsService.getById(Number(this.postId))
    })
  }

  getTags(tags: string) {
    if (tags.includes(',')) {
      return tags.split(", ")
    } else {
      return [tags]
    }

  }

  onClickTag(tag: string) {
    this.postsService.currentTag = tag
    this.router.navigate(['/posts'])
  }

}
