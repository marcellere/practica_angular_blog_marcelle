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
  router = inject(Router)

  ngOnInit() {
    if (this.postsService.currentTag !== "") {
      this.arrPosts = this.postsService.getAll()
    } else {
      this.arrPosts = this.postsService.getByTag(this.postsService.currentTag)
    }
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
    if (cat !== "all") {
      this.postsService.currentCat = cat
      this.arrPosts = this.postsService.getByCategory(cat)
    } else {
      this.postsService.currentCat = ""
      this.arrPosts = this.postsService.getAll()
    }
  }

  onClickTag(tag: string) {
    this.arrPosts = this.postsService.getByTag(tag)
    this.postsService.currentTag = tag
  }

  onClickRemoveTag() {
    this.postsService.currentTag = ""
    this.arrPosts = this.postsService.getAll()
  }

  onClickNav(id: number) {
    this.router.navigate([`/posts/${id}`])
  }


}
