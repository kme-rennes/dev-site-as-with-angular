import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

@NgModule({
  imports: [
    ArticleRoutingModule, SharedModule
  ],
  declarations: [ListeArticleComponent, DetailArticleComponent]
})
export class ArticleModule { }
