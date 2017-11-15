import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page.component';
import { communityRouter } from './community-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    communityRouter
  ],
  declarations: [CommunityPageComponent]
})
export class CommunityPageModule { }
