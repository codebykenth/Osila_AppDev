import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewPage } from './new-page/new-page.page';
import { AnotherPagePage } from './another-page/another-page';
import { HomePage } from './home/home.page';
import { SharedComponent } from './shared/shared.component';
import { ActivityPagePage } from './activity-page/activity-page.page';

@NgModule({
  // Declare all components here in declaration
  declarations: [
    AppComponent,
    NewPage,
    AnotherPagePage,
    HomePage,
    SharedComponent,
    ActivityPagePage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
