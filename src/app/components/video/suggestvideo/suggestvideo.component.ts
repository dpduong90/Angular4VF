import { Component, OnInit } from '@angular/core';
import { SuggestvideoService } from '../../../services/suggestvideo.service';
import { Video } from '../../../model/Video';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-suggestvideo',
  templateUrl: './suggestvideo.component.html',
  styleUrls: ['./suggestvideo.component.scss'],
  providers: [SuggestvideoService]
})
export class SuggestvideoComponent implements OnInit {
  listVideos: Video[];
  constructor(private suggestvideoService: SuggestvideoService) {
    this.suggestvideoService.getVideosFavorites('381221311779798465').subscribe(result => {
      console.log(result);
      this.listVideos = result;
    });
  }

  ngOnInit() {
    
  }

  
  
  // bindDataToSuggested(player, promise) {
  
  //   console.log("bindDataToSuggested executed !");
  
  //   function bindSuggestVideos(suggestData) {
  //     if (suggestData.data.videos) {
  //       var arrVideoItems = [];
  //       $.each(suggestData.data.videos, function (number, video) {
  
  //         var videoItem = {};
  //         videoItem.name = video.title;
  //         videoItem.description = /*video.desc*/ '';
  //         var srcObj = {};
  //         srcObj.src = video.videoUrl;
  //         var srcMedia = video.videoUrl;
  //         var exactlyTypeMedia = "video/youtube";
  //         if (utils.getYoutubeVideoId(srcMedia)) {
  //           exactlyTypeMedia = "video/youtube";
  //         } else {
  //           if (srcMedia.match(/.mpd$/) || srcMedia.match(/.mpd\?/)) {
  //             exactlyTypeMedia = "application/dash+xml";
  //           } else if (srcMedia.match(/.m3u8$/) || srcMedia.match(/.m3u8\?/)) {
  //             exactlyTypeMedia = "application/x-mpegURL";
  //           } else if (srcMedia.match(/.mp4$/) || srcMedia.match(/.mp4\?/)) {
  //             exactlyTypeMedia = "video/mp4";
  //           }
  //         }
  //         srcObj.type = exactlyTypeMedia;
  //         videoItem.sources = [srcObj];
  //         videoItem.duration = video.duration;
  //         videoItem.thumbnail = [{src: video.staticThumbUrl}];
  //         videoItem.itemId = video.id;
  //         videoItem.popularity = video.popularity;        
  //         // extra field
  //         videoItem.profile = video.profile;
  //         videoItem.viewed = video.viewed;
  //         videoItem.updateTs = video.uploadTs;
  //         videoItem.uploadTs = video.uploadTs;
  //         videoItem.parentCate = video.parentCate;
  //         videoItem.tags = video.tags;
  //         videoItem.fulldesc = video.desc;
  //         videoItem.url = video.officialUrl;
  //         videoItem.officialUrl = video.officialUrl;
  //         videoItem.shortUrl = video.shortUrl;
  //         videoItem.subtitles = video.subtitles;
  //         videoItem.createTsText = video.createTsText;
  //         // add to list
  //         arrVideoItems.push(videoItem);
  //       });
  //       if(player.hasOwnProperty('favorites')){
  //         delete player.favorites;
  //         $('.vjs-favorites').html('');
  //       }
  //       player.favorites(arrVideoItems);
  //       player.favoritesUi();
  //       console.log("** ==> bindSuggestVideos:", arrVideoItems);
  //     }
  //   }
  
  //   bindSuggestPlaylists(suggestData) {
  
  //     if (suggestData.data.playlists) {
  //       var arrItems = [];
  //       $.each(suggestData.data.playlists, function (number, pl) {
  //         //console.log("* pl:", pl);
  //         var bindItem = {};
  //         bindItem.name = pl.title;
  //         bindItem.description = pl.desc.replace(/(<([^>]+)>)/ig, ""); //replace html tag
  //         bindItem.sources = [];
  //         bindItem.duration = pl.duration;
  //         bindItem.thumbnail = [{src: pl.thumbUrl}];
  //         bindItem.itemId = pl.itemId;
  //         bindItem.popularity = pl.popularity;
  //         // extra field
  //         bindItem.profile = pl.profile;
  //         bindItem.viewed = pl.viewCount;
  //         bindItem.videoCount = pl.videoCount;
  //         bindItem.updateTs = pl.lastUpdateTS;
  //         bindItem.url = pl.itemUrl;
  //         // add to list
  //         arrItems.push(bindItem);
  //       });
  //       player.favorites(arrItems);
  //       player.favoritesUi();
  //     }
  //   }
  
  //   promise.done(function (suggestData) {
  //     if (suggestData && suggestData.data) {
  //       /*console.log(suggestData);*/
  //       bindSuggestVideos(suggestData);
  //       bindSuggestPlaylists(suggestData);
  //       fixLayout();
  //     }
  //   });
  // };
  
}
