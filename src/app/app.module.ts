import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './shared/pages/posts/posts.component';
import { PostFormComponent } from './shared/pages/post-form/post-form.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PostDetailComponent } from './shared/pages/post-detail/post-detail.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    NavBarComponent,
    PostDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
