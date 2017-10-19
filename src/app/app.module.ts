import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideodetailComponent } from './components/video/videodetail/videodetail.component';
import { SuggestvideoComponent } from './components/video/suggestvideo/suggestvideo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MusicComponent } from './components/music/music.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { NewsComponent } from './components/news/news.component';
import { CommunityComponent } from './components/community/community.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideodetailComponent,
    SuggestvideoComponent,
    HomepageComponent,
    MusicComponent,
    EntertainmentComponent,
    KnowledgeComponent,
    NewsComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
