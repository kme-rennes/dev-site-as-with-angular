import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'articles', loadChildren: 'app/article/article.module#ArticleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
