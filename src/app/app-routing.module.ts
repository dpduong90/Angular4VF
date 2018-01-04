import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';


export const routes: Routes = [
    {path: '', loadChildren: './modules/home-page/home-page.module#HomePageModule'},
    {path: 'am-nhac', loadChildren: './modules/music-page/music-page.module.ts#MusicPageModule'},
    {path: 'am-nhac/genre-detail', loadChildren: './modules/genredetail/genredetail.module.ts#GenredetailModule'},
    {path: 'am-nhac/artist-detail', loadChildren: './modules/artistdetail/artistdetail.module.ts#ArtistdetailModule'},
    {path: 'am-nhac/all-artists', loadChildren: './modules/musicgenre-artists-page/musicgenre-artists-page.module.ts#MusicgenreArtistsPageModule'},
    {path: 'am-nhac/all-birthdayartists', loadChildren: './modules/musicgenre-bdartists-page/musicgenre-bdartists-page.module.ts#MusicgenreBdartistsPageModule'},
    {path: 'am-nhac/genre-playlists', loadChildren: './modules/musicgenre-playlists-page/musicgenre-playlists-page.module.ts#MusicgenrePlaylistsPageModule'},
    {path: 'am-nhac/artist-playlists', loadChildren: './modules/artist-playlists-page/artist-playlists-page.module.ts#ArtistPlaylistsPageModule'},
    {path: 'giai-tri', loadChildren: './modules/entertainment-page/entertainment-page.module#EntertainmentPageModule'},
    {path: 'kien-thuc', loadChildren: './modules/knowledge-page/knowledge-page.module#KnowledgePageModule'},
    {path: 'tin-tuc', loadChildren: './modules/news-page/news-page.module#NewsPageModule'},
    {path: 'cong-dong', loadChildren: './modules/community-page/community-page.module#CommunityPageModule'},
    {path: 'video', loadChildren: './modules/video-page/video-page.module#VideoPageModule'},
    {path: 'search', loadChildren: './modules/search-page/search-page.module#SearchPageModule'},
    {path: 'channel-detail', loadChildren: './modules/channeldetail/channeldetail.module#ChanneldetailModule'},
    {path: 'channel-videos', loadChildren: './modules/channel-videos/channel-videos.module#ChannelVideosModule'},
    {path: 'channel-playlists', loadChildren: './modules/channel-playlists/channel-playlists.module#ChannelPlaylistsModule'},
    {path: 'channel-channelsuggest', loadChildren: './modules/channel-channelsuggest/channel-channelsuggest.module#ChannelChannelsuggestModule'}, 
    {path: 'channel-infomation', loadChildren: './modules/channel-info/channel-info.module#ChannelInfoModule'},
    {path: 'channel-search', loadChildren: './modules/channel-search/channel-search.module#ChannelSearchModule'}
    
    
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }