import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: './modules/home-page/home-page.module#HomePageModule'},
    // {path: 'am-nhac', loadChildren: './modules/community-page/community-page.module#CommunityPageModule'},
    // {path: 'giai-tri', loadChildren: './modules/entertainment/entertainment.module#EntertainmentModule'},
    // {path: 'kien-thuc', loadChildren: './modules/Knowledge/knowledge.module#KnowledgeModule'},
    // {path: 'tin-tuc', loadChildren: './modules/news/news.module#NewsModule'},
    {path: 'cong-dong', loadChildren: './modules/community-page/community-page.module#CommunityPageModule'},
    {path: 'video', loadChildren: './modules/video-page/video-page.module#VideoPageModule'}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }