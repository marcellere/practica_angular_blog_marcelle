import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { blogPosts } from "../data/posts.db";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: IPost[] = []
  currentTag: string = ""
  currentCat: string = ""
  currentId: number = 10

  constructor() {
    this.arrPosts = blogPosts
  }

  create(post: IPost): number {
    this.arrPosts.push(post)
    return this.arrPosts.length;
  }

  getAll(): IPost[] {
    return this.arrPosts
  }

  getByCategory(cat: string): IPost[] {
    this.currentCat = cat
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
    this.currentTag = tag;
    return this.arrPosts.filter(post => post.tags.includes(tag))
  }

  getById(postId: number): IPost | undefined {
    return this.arrPosts.find(post => post.id === postId)
  }

}
