import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityPagePage } from './activity-page.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPagePageRoutingModule {}
