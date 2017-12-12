import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';


export const routes: Routes = [
    {path: '', loadChildren: './modules/home-page/home-page.module#HomePageModule'},
    {path: 'am-nhac', loadChildren: './modules/music-page/music-page.module.ts#MusicPageModule'},
    {path: 'am-nhac/genre-detail', loadChildren: './modules/genredetail/genredetail.module.ts#GenredetailModule'},
    {path: 'giai-tri', loadChildren: './modules/entertainment-page/entertainment-page.module#EntertainmentPageModule'},
    {path: 'kien-thuc', loadChildren: './modules/knowledge-page/knowledge-page.module#KnowledgePageModule'},
    {path: 'tin-tuc', loadChildren: './modules/news-page/news-page.module#NewsPageModule'},
    {path: 'cong-dong', loadChildren: './modules/community-page/community-page.module#CommunityPageModule'},
    {path: 'video', loadChildren: './modules/video-page/video-page.module#VideoPageModule'},
    {path: 'search', loadChildren: './modules/search/search.module#SearchModule'}
    
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }