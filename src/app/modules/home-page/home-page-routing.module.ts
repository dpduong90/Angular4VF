import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component'

const HOME_ROUTER: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

export const homeRouter = RouterModule.forChild(HOME_ROUTER);
