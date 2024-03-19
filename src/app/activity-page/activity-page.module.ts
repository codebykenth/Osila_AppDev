import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPagePageRoutingModule } from './activity-page-routing.module';

import { ActivityPagePage } from './activity-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPagePageRoutingModule
  ],
  declarations: [ActivityPagePage]
})
export class ActivityPagePageModule {}
