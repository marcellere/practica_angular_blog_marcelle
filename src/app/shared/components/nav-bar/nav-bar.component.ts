import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  postsService = inject(PostsService)
  router = inject(Router)

  onClickNav() {
    this.postsService.currentCat = "";
    this.postsService.currentTag = "";
    this.router.navigate(['/posts'])
  }
}
