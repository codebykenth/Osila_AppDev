import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithId } from './my-custom/my-custom-page-with-id/my-custom-page-with-id';
import { MyCustomPage } from './my-custom/my-custom.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'my-custom', component: MyCustomPage }, // Path for my-custom.page.html -- The my-custom.page.html is inside the MyCustomPage (templateUrl)

  { path: 'my-custom/my-custom-page/:id', component: MyCustomPageWithId }, // Path for my-custom-page-with-id.html -- The my-custom-page-with-id.html is inside the MyCustomPageWithId (templateUrl)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
