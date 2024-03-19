import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewPage } from './new-page/new-page.page';
import { AuthenticationService } from './authentication.service';
import { AnotherPagePage } from './another-page/another-page';
import { HomePage } from './home/home.page';
import { SharedComponent } from './shared/shared.component';

// Add all path and components here in routes to find what component will be shown when directed to specified path
const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-page',
    component: NewPage,
    canActivate: [AuthenticationService], // Service that is needed to include to use authentication in page
  },
  {
    path: 'shared',
    component: SharedComponent,
  },
  {
    path: 'another-page',
    component: AnotherPagePage,
    canActivate: [AuthenticationService], // Service that is needed to include to use authentication in page
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
