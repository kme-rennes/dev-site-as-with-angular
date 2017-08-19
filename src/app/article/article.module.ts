import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    ArticleRoutingModule, SharedModule
  ],
  declarations: []
})
export class ArticleModule { }
