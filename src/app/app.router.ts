import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MusicComponent } from './components/music/music.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { NewsComponent } from './components/news/news.component';
import { CommunityComponent } from './components/community/community.component';
import { VideodetailComponent } from './components/video/videodetail/videodetail.component';

export const router: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'homepage',component: HomepageComponent},
    {path: 'am-nhac',component: MusicComponent},
    {path: 'giai-tri',component: EntertainmentComponent},
    {path: 'kien-thuc',component: KnowledgeComponent},
    {path: 'tin-tuc',component: NewsComponent},
    {path: 'cong-dong',component: CommunityComponent},
    {path: 'video',component: VideodetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);