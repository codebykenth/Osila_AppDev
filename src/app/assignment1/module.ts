import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CustomPageRoutingModule } from './routing-module';
import { CustomPage } from './page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomPageRoutingModule],
  declarations: [CustomPage],
})
export class CustomPageModule {}
