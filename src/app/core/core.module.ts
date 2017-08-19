import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { TwainComponent} from '../shared/twain.component';

import { TwainService } from '../shared/twain.service';

import { UserService } from '../model';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TwainComponent],
  declarations: [TwainComponent],
  providers: [TwainService, UserService],
})
export class CoreModule { }
