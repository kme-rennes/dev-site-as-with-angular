import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe }      from './title-case.pipe';


@NgModule({
  imports:      [ CommonModule, FormsModule
  ],
  exports:      [ CommonModule, FormsModule,
      HighlightDirective, TitleCasePipe ],
  declarations: [ HighlightDirective, TitleCasePipe ]
})
export class SharedModule { }
