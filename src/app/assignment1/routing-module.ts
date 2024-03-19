import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPage } from './page';

const routes: Routes = [
  {
    path: '',
    component: CustomPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomPageRoutingModule {}
