import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPageRoutingModule } from './my-custom-routing.module';

import { MyCustomPage } from './my-custom.page';
import { MyCustomPageWithId } from './my-custom-page-with-id/my-custom-page-with-id';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyCustomPageRoutingModule],
  declarations: [MyCustomPage, MyCustomPageWithId],
})
export class MyCustomPageModule {}
