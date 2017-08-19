import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeArticleComponent} from './liste-article/liste-article.component';
import { DetailArticleComponent} from './detail-article/detail-article.component';

const routes: Routes = [{ path: '',    component: ListeArticleComponent },
                        { path: ':id',    component: DetailArticleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
