import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page.component';
import { communityRouter } from './community-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    communityRouter,
    SharedComponentsModule
  ],
  declarations: [CommunityPageComponent]
})
export class CommunityPageModule { }
