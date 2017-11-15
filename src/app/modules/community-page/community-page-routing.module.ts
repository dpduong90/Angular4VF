import { Routes, RouterModule } from '@angular/router';
import { CommunityPageComponent } from './community-page.component';

const COMMUNITY_ROUTER: Routes = [
  {
    path: '',
    component: CommunityPageComponent
  }
];

export const communityRouter = RouterModule.forChild(COMMUNITY_ROUTER);
