import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postsService = inject(PostsService)
  arrPosts: IPost[] = []
  arrCategories: string[] = []
  arrTags: string[] = []
  currentTag: string = ""
  router = inject(Router)
  currentCat!: string

  ngOnInit() {
    this.arrPosts = this.postsService.getAll()
    this.arrCategories = this.postsService.getCategories()
    this.arrTags = this.postsService.getTags()
  }

  onClickFilter(cat: string) {
    if (cat !== '') {
      this.arrPosts = this.postsService.getByCategory(cat)
    } else {
      this.arrPosts = this.postsService.getAll()
    }
  }

  getTags(tags: string) {
    return tags.split(", ")
  }

  onClickCategory(cat: string) {
    this.currentCat = cat
    if (cat !== "all") {
      this.arrPosts = this.postsService.getByCategory(cat)
    } else {
      this.arrPosts = this.postsService.getAll()
    }
  }

  onClickTag(tag: string) {
    this.arrPosts = this.postsService.getByTag(tag)
    this.currentTag = tag
  }

  onClickRemoveTag() {
    this.currentTag = ""
    this.arrPosts = this.postsService.getAll()
  }

  onClickNav(id: number) {
    this.router.navigate([`/posts/${id}`])
  }


}
