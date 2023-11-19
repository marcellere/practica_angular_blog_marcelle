import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { blogPosts } from "../data/posts.db";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: IPost[] = []

  constructor() {
    this.arrPosts = blogPosts
  }

  create(post: IPost) {
    this.arrPosts.push(post)
    localStorage.removeItem('arr_posts')
    localStorage.setItem('arr_posts', JSON.stringify(this.arrPosts))
  }

  getAll(): IPost[] {
    if (localStorage.getItem('arr-posts')) {
      return JSON.parse('arr_posts')
    } else {
      localStorage.setItem('arr_posts', JSON.stringify(this.arrPosts))
      return this.arrPosts
    }
  }

  getByCategory(cat: string): IPost[] {
    return this.arrPosts.filter(post => post.category === cat)
  }

  getCategories() {
    return [...new Set(this.arrPosts.map(post => post.category))]
  }

  getTags() {
    let arrTags = this.arrPosts.map(post => post.tags.split(", "))
    return [...new Set(arrTags.join(",").split(","))]
  }

  getByTag(tag: string) {
    return this.arrPosts.filter(post => post.tags.includes(tag))
  }

  getById(postId: number): IPost | undefined {
    return this.arrPosts.find(post => post.id === postId)
  }

}
