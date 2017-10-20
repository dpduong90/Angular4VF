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
import { PlaylistitemComponent } from './components/section/items/playlistitem/playlistitem.component';
import { VideoitemComponent } from './components/section/items/videoitem/videoitem.component';
import { GenreitemComponent } from './components/section/items/genreitem/genreitem.component';
import { SvideoChannelSlideComponent } from './components/section/svideo-channel-slide/svideo-channel-slide.component';
import { SplaylistSlideComponent } from './components/section/splaylist-slide/splaylist-slide.component';
import { SvideoSlideComponent } from './components/section/svideo-slide/svideo-slide.component';
import { SvideoComponent } from './components/section/svideo/svideo.component';
import { SchannelComponent } from './components/section/schannel/schannel.component';
import { SgenreComponent } from './components/section/sgenre/sgenre.component';
import { StopSlideComponent } from './components/section/stop-slide/stop-slide.component';
import { SplaylistComponent } from './components/section/splaylist/splaylist.component';

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
    CommunityComponent,
    PlaylistitemComponent,
    VideoitemComponent,
    GenreitemComponent,
    SvideoChannelSlideComponent,
    SplaylistSlideComponent,
    SvideoSlideComponent,
    SvideoComponent,
    SchannelComponent,
    SgenreComponent,
    StopSlideComponent,
    SplaylistComponent
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
