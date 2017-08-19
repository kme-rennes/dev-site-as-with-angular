import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about.component';
import { WelcomeComponent } from './welcome.component';
import { BannerComponent } from './banner.component';

import { CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, BannerComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
