import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//add components to route
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './users/user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main/main.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
