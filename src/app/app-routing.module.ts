import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './shared/pages/posts/posts.component';
import { PostFormComponent } from './shared/pages/post-form/post-form.component';
import { PostDetailComponent } from './shared/pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postId', component: PostDetailComponent },
  { path: 'new', component: PostFormComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
