import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyCustomPageWithId } from './my-custom/my-custom-page-with-id/my-custom-page-with-id';
import { MyCustomPage } from './my-custom/my-custom.page';

@NgModule({
  declarations: [AppComponent, MyCustomPageWithId, MyCustomPage], // Add necessary components to access or run the code inside it
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
