import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { catBlogPosts } from "../data/posts.db";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: IPost[] = []

  constructor() {
    this.arrPosts = catBlogPosts
  }

  create(post: IPost) {
    this.arrPosts.push(post)
  }

  getAll(): IPost[] {
    return this.arrPosts;
  }

  getByCategory(cat: string): IPost[] {
    return this.arrPosts.filter(post => post.category === cat)
  }
}
