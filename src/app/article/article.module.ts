import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ArticleService} from '../model/article.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ArticleRoutingModule, SharedModule, NgbModule
  ],
  declarations: [ListeArticleComponent, DetailArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule { }
