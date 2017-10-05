var api_base = (typeof CONFIG == 'undefined' || !CONFIG.API_BASE) ? '//'+window.location.host + '/api/ ' : CONFIG.API_BASE + 'api/';
var login_url = (typeof CONFIG == 'undefined' || !CONFIG.API_BASE) ? 'https://'+window.location.host + '/login?type=small' : 'https:' + CONFIG.API_BASE + 'login?type=small';
var isLogin = false;
var myLoginInterval;
var loginWindow;
var notificationInterval;
var hasMore = true;
var waypoint;
var DEVICE = {
    platform : 'unknown', // ios, android, windows
    name : 'unknown', // ipad, iphone
    type : 'unknown', // tablet, smartphone, desktop
    screen : document.body.clientWidth, // width in px
    browser : 'unknown' // chrome, firefox, ie, safari
};

var userAgent = navigator.userAgent.toLowerCase();

// set locale for moment (see more at moment.js (http://momentjs.com/docs/))
moment.locale('vi');

function fbs_share_click(width, height, url) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    t=document.title;
    window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(t),
        'sharer', windowFeatures);
    return false;
}

function tws_share_click(width, height, url) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    t=document.title;
    window.open('https://twitter.com/home?status=' + encodeURIComponent(t + ' ' + url), 'sharer', windowFeatures);
    return false;
}

function ggp_share_click(width, height, url){
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    t=document.title;
    window.open('https://plus.google.com/share?url='+encodeURIComponent(url + '&title=' + t), 'sharer', windowFeatures);
    return false;
}

function getParameterByNameInHash(name, hash_query_string) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[#&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(hash_query_string);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function formatYoutubePublishTime(publishedAt) {
var publish_date = new Date(publishedAt);
return formatFriendlyTime(publish_date.getTime())
}

function calculateYoutubeDuration(youtube_duration) {
    var length = 0;
    var duration = youtube_duration.match(/(\d+\w)/ig);
    for(var i=0;i<duration.length;i++) {
        if(duration[i].search('H')>=0) {
            length += parseInt(duration[i])*60*60;
        }
        if(duration[i].search('M')>=0) {
            length += parseInt(duration[i])*60;
        }
        if(duration[i].search('S')>=0) {
            length += parseInt(duration[i]);
        }
    }
    return length;
}
/* 
*EI 11: new define function startsWith for string if browser not supported
*/
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

/**
 * Setup link tracking for individual video in zone
 * @return {[type]} [description]
 */
function setupAnalytics() {
    var all = $(document).find('a');
    all.each(function(index, atag){
        var href = $(atag).attr('href');
        if(href != null
            && (href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://"))
            && !href.startsWith("/channel/")
            && href.indexOf(".html") >= 0 && href.indexOf("cvf=1") < 0)
        {
            if(href.indexOf('#') == -1){
                $(atag).attr('href', href + "#cvf=1");
            } else {
                $(atag).attr('href', href + "&cvf=1");
            }
        }
    });

    var $zones = $('*[zone-id]');
    $zones.each(function(index, zone) {
        var $links = $(zone).find('article a');
        var zoneid = $(zone).attr('zone-id');
        if (zoneid) {
            for (var i=0; i < $links.length; i++) {
                var href = $links.eq(i).attr('href');
                if(href && href.indexOf('#') >= 0){
                    $links.eq(i).attr('href', href + "&zone=" + zoneid);
                } else {
                    $links.eq(i).attr('href', href + "#zone=" + zoneid);
                }
            }
        }
    });

    var recentlyUpdate = $('#div_PlaylistUpdated').find('article');
    recentlyUpdate.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("recently-update=1") < 0) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&recently-update=1");
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#recently-update=1");
            }
        }
    });

    var justAdded = $('#div_PlaylistAdded').find('article');
    justAdded.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("just-added=1") < 0) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&just-added=1");
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#just-added=1");
            }
        }
    });

    var genreItems = $(document).find('.wrapcontent article');
    genreItems.each(function(index, articletag){
        var genreTitle = $(articletag).find('.title a').text().replace(/ /g,"").replace(/[^a-zA-Z ]/g,"-");;
        var artistes = $(articletag).find('.vf-mainofgenres a');
        artistes.each(function(index, atag){
            var href = $(atag).attr('href');
            if(href.indexOf("genre=" + genreTitle) < 0) {
                if(href.indexOf('#') >= 0){
                    $(atag).attr('href', href + "&genre=" + genreTitle);
                } else {
                    $(atag).attr('href', href + "#genre=" + genreTitle);
                }
            }
        });
    });

    var highlightArtists = $('#highlightartists').find('article');
    var genreTitle = $(document).find('.name-title h1').text().replace(/ /g,"");
    highlightArtists.each(function(index, atag){
        var href = $(atag).find('a').attr('href');
        if(href.indexOf("genre=" + genreTitle) < 0 && genreTitle) {
            if(href.indexOf('#') >= 0){
                $(atag).find('a').attr('href', href + "&genre=" + genreTitle);
            } else {
                $(atag).find('a').attr('href', href + "#genre=" + genreTitle);
            } 
        }
    });

    var birthdayArtists = $('#birthdayartists').find('article');
    birthdayArtists.each(function(index, atag){
        var href = $(atag).find('a').attr('href');
        if(href.indexOf("birthday=" + genreTitle) < 0 && genreTitle) {
            if(href.indexOf('#') >= 0){
                $(atag).find('a').attr('href', href + "&birthday=" + genreTitle);
            } else {
                $(atag).find('a').attr('href', href + "#birthday=" + genreTitle);
            }
        }
    });

    var toptracks = $('#toptracks').find('article');
    toptracks.each(function(index, atag){
        var href = $(atag).find('a').attr('href');
        if(href.indexOf("highlights=" + genreTitle) < 0 && genreTitle) {
            if(href.indexOf('#') >= 0){
                $(atag).find('a').attr('href', href + "&highlights=" + genreTitle);
            } else {
                $(atag).find('a').attr('href', href + "#highlights=" + genreTitle);
            } 
        } else {
            var artistName = $(document).find('.name-artist h1').text().replace(/ /g,"");
            if (href.indexOf("toptracks=" + artistName) < 0 && artistName) {
                if(href.indexOf('#') >= 0){
                    $(atag).find('a').attr('href', href + "&toptracks=" + artistName);
                } else {
                    $(atag).find('a').attr('href', href + "#artistName=" + artistName);
                } 
            }
        }
    });

    var playlists = $(document).find('.vf-playlist article');
    playlists.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("genre=" + genreTitle) < 0  && genreTitle) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&genre=" + genreTitle);
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#genre=" + genreTitle);
            }
        }
    });

    var listAlbums = $('#listalbums').find('article');
    var artistName = $(document).find('.name-artist h1').text();
    listAlbums.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("album=" + artistName) < 0 && artistName) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&album=" + artistName);
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#album=" + artistName);
            } 
        }
    });

    var listSingles = $('#listsingles').find('article');
    listSingles.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("single=" + artistName) < 0 && artistName) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&single=" + artistName);
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#single=" + artistName);
            } 
        }
    });
    
    var listPlaylists = $('#listplaylists').find('article');
    listPlaylists.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("apeearon=" + artistName) < 0 && artistName) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&apeearon=" + artistName);
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#apeearon=" + artistName);
            } 
        }
    });
    
    var listCompilations = $('#listcompilations').find('article');
    listCompilations.each(function(index, atag){
        var href = $(atag).find('.thumbnail a').attr('href');
        if(href.indexOf("compilation=" + artistName) < 0 && artistName) {
            if(href.indexOf('#') >= 0){
                $(atag).find('.thumbnail a').attr('href', href + "&compilation=" + artistName);
            } else {
                $(atag).find('.thumbnail a').attr('href', href + "#compilation=" + artistName);
            } 
        }
    });

    var similarArtists = $('#similarartists').find('article');
    similarArtists.each(function(index, atag){
        var href = $(atag).find('a').attr('href');
        if(href.indexOf("similar=" + artistName) < 0 && artistName) {
            if(href.indexOf('#') >= 0){
                $(atag).find('a').attr('href', href + "&similar=" + artistName);
            } else {
                $(atag).find('a').attr('href', href + "#similar=" + artistName);
            } 
        }
    });
}
    

function pushGA(category, eventAction, page, action) {
    if (typeof category === "undefined" || typeof eventAction === "undefined") {
        log("[" + page + "] category or action undifined");
    } else if (category.trim() == '' || eventAction.trim() == '') {
        log("[" + page + "] category or action null");
    } else {
        if(typeof action === "undefined") {
            ga('send', 'event',  category, eventAction);
        } else {
            ga('send', 'event',  category, eventAction, action);
        }
        
    }
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
};

var documentTimer = startTimer(), debug_mode = true;
var Dialog = new Dialog();
var App = new Application();
var Youtube = new Youtube();                                                

var loadAppAndroid = function () {
	var startTime = (new Date).valueOf();
	$("body").append('<iframe style="width:1px;height:1px;position:fixed;top:0;left:0;" src="videoflyvn://videofly.vn"></iframe>');
	setTimeout(function () {
		var now = (new Date).valueOf();
		var diff = now - startTime;
		console.log("diff time:", diff);
		3050 > diff && (document.location = 'https://play.google.com/store/apps/details?id=vn.com.videofly.videofly');
	}, 3000);
};

function loadAppIOS() {

    var extractedIOSAppLink = function () {

        var buildLink = 'videoflyvn://';
        if(vf_meta && Object.keys(vf_meta).length > 0){
            var video = vf_meta.video;
            var channel = vf_meta.channel;
            var playlist = vf_meta.playlist;
            var cate = vf_meta.cate;
            if(video){
                if (playlist) {
                    if (Number(playlist.groupId) > 0) {
                        buildLink += 'play/group?gid=' + playlist.groupId + '&pid=' + playlist.playlistId + '&vid=' + video.videoId + '&pos=0';
                    }else{
                        buildLink += 'play/playlist?pid=' + playlist.playlistId + '&vid=' + video.videoId + '&pos=0';
                    }
                } else {
                    buildLink += 'play/video?vid=' + video.videoId + '&pos=0';
                }
            } else if (channel) {
                if (playlist) {
                    if (Number(playlist.groupId) > 0) {
                        buildLink += 'show/group?gid=' + playlist.groupId + '&pid=' + playlist.playlistId;
                    }else{
                        buildLink += 'show/playlist?pid=' + playlist.playlistId;
                    }
                } else {
                    buildLink += 'show/channel?cid=' + channel.channelId;
                }
            } else if (cate) {
                if (QueryString().filter && QueryString().filter == 'video') {
                    buildLink += 'show/category/video?cateid=' + cate.cateId + '&pcateid=' + cate.parentId;
                } else {
                    buildLink += 'show/category/playlist?cateid=' + cate.cateId + '&pcateid=' + cate.parentId;
                }
            }
        } else {
            buildLink += 'show/home';
        }
        return buildLink;
    };
    var appurl = extractedIOSAppLink();
    var appstore = 'itms://itunes.apple.com/us/app/pages/id1081257854';

    var app = {
        launchApp: function() {
            console.log("Hey! We will go to: ",appurl);
            // alert(appurl);
            window.location.replace(appurl);
            this.timer = setTimeout(this.openWebApp, 1000);
        },

        openWebApp: function() {
            window.location.replace(appstore);
        }
    };

    app.launchApp();
}
function loadAppIOS_221() {
    var appurl = 'videoflyvn://home';
    var playlistId = getplaylistId();
    var videoId = page_id() ? page_id() : 0;
    if (!playlistId && !videoId) {
        appurl = 'videoflyvn://home';
    } else {
        appurl = playlistId
            ? 'videoflyvn://play/playlist?pid=' + playlistId + '&vid=' + videoId + '&pos=0'
            : 'videoflyvn://play/video?vid=' + videoId + '&pos=0';
    }
    var appstore = 'itms://itunes.apple.com/us/app/pages/id1081257854';
    window.location = appurl;
    // $("body").append('<iframe style="width:1px;height:1px;position:fixed;top:0;left:0;" src="videoflyvn://home"></iframe>');
    !document.hidden && setTimeout(function () {
        setTimeout(function () {
            alert("webkitHidden:" + document.hidden);
            if(!window.document.webkitHidden)
                window.location = appstore;
        }, 100);
    }, 600);
    // set the initial state (but only if browser supports the Page Visibility API)
    /*if( document[hidden] !== undefined )
        onchange({type: document[hidden] ? "blur" : "focus"});*/
}
var closeBannerAndroid = function () {
	$.cookie("banner-android", 1, {expires: 7});
	$("#vf-appstore").hide();
};

var buildBannerAndroid = function () {
	var cookieValue = $.cookie("banner-android");
	if (cookieValue == 1)
	    return;
	//  <a "href="intent://#Intent;scheme=videoflyvn://play/video?vid=395668228757622224&amp;pos=0;package=vn.com.videofly.videofly;end">test</a>
	var playlistId = getplaylistId();
	var videoId = page_id();
	var flexibleScheme = '';

	if (!playlistId && !videoId) {
		flexibleScheme = 'scheme=videoflyvn://videofly.vn;';
	} else {
		flexibleScheme = playlistId
			? 'scheme=videoflyvn://play/playlist?pid=' + playlistId + '&vidx=0&pos=0;'
			: 'scheme=videoflyvn://play/video?vid=' + videoId + '&amp;pos=0;';
	}
	var intentStr = 'intent://#Intent;'
		+ flexibleScheme
		+ 'package=vn.com.videofly.videofly;'
		+ 'end';
	var htmlAndroidBanner =
		'<div id="vf-appstore" class="app-adroid">'
		+ '<div class="banner_app">'
		+ '<div class="first_line">'
		+ '<div class="logo">' + '</div>'
		+ '<div class="logo_vf">'
		+ '</div>'
		+ '<div class="text_zone">Trải nghiệm tốt hơn trên app VideoFly</div>'
		+ '<div class="logo_ggstore">'
		+ '</div>'
		+ '</div>'
		+ '<div class="right_zone">'
		+ '<a href="#" class="close-app" onclick="closeBannerAndroid()">'
		+ '</a>'
		// + '<a id="android_banner_open" href="' + intentStr + '" class="open-app" onclick="loadAppAndroid()">'
		+ '<a id="android_banner_open" href="' + intentStr + '" class="open-app">'
		+ '</a>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("body").prepend(htmlAndroidBanner);
};

var closeBannerIOS = function () {
    $.cookie("banner-ios", 1, {expires: 7});
    $("#vf-appstore").hide();
};
var buildBannerIOS = function () {
    var cookieValue = $.cookie("banner-ios");
    if (cookieValue == 1)
        return;
    var htmlBanner =
        '<div id="vf-appstore" class="app-adroid app-ios">'
        + '<div class="banner_app">'
        + '<div class="first_line">'
        + '<div class="logo">' + '</div>'
        + '<div class="logo_vf">'
        + '</div>'
        + '<div class="text_zone">Trải nghiệm tốt hơn trên app VideoFly</div>'
        + '<div class="logo_iosstore">'
        + '</div>'
        + '</div>'
        + '<div class="right_zone">'
        + '<a href="#" class="close-app" onclick="closeBannerIOS()">'
        + '</a>'
        + '<a id="android_banner_open" class="open-app" onclick="loadAppIOS()">'
        + '</a>'
        + '</div>'
        + '</div>'
        + '</div>';
    $("body").prepend(htmlBanner);
};

$(document).on('ready', function() {

    App.init();

	if (/(Android)/g.test(navigator.userAgent)) {
		buildBannerAndroid();
	}
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        buildBannerIOS();
    }
    if (userAgent.indexOf('ipad') > -1) {
        DEVICE.platform = 'ios';
        DEVICE.name = 'ipad';
        DEVICE.type = 'tablet';
    } else if (userAgent.indexOf('iphone') > -1) {
        DEVICE.platform = 'ios';
        DEVICE.name = 'iphone';
        DEVICE.type = 'smartphone';
    } else if (userAgent.indexOf('android') > -1) {
        DEVICE.platform = "android";
        DEVICE.type = !(userAgent.indexOf('mobile') > -1) ? "tablet" : "smartphone";
    } else if (userAgent.indexOf('windows phone') > -1) {
        DEVICE.platform = "windows";
        DEVICE.type = "smartphone";
    } else {
        DEVICE.type = "desktop";
    }
    if (userAgent.indexOf('chrome') > -1) {
        DEVICE.browser = 'chrome';
    } else if (userAgent.indexOf('firefox') > -1) {
        DEVICE.browser = 'firefox';
    } else if (userAgent.indexOf('msie') > -1) {
        DEVICE.browser = 'ie';
    } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') < 0) {
        DEVICE.browser = 'safari';
    }

    setupAnalytics();
    /*if(window.history && history.replaceState) {
        History.replaceState({}, $(document).attr('title'), window.location.href.replace(/#.*$/ig,''));
    }*/
    $("#embedbtn").on('click', function(e){
        e.preventDefault();
        Dialog.showEmbedDialog();
    });
    showTimerDuration(documentTimer, "Document Ready");
    isLogin = $.cookie('JSESSID') ? true : false;
    updateLoginMenu();
    $(document).mouseup(function (e) {
        var container = $("#notifyfeedBox");
        checkAndHide(container, e.target, $('.newNotifi'));
        if($("#notifyfeedBox").is(':hidden')) {
            $("#ascrail2000").hide();   //hide notify scroll bar
        }
    });
    var localLoginInterval;
    if (!localLoginInterval) {
        localLoginInterval = window.setInterval(function () {
            if (isLogin) {
                clearInterval(localLoginInterval);
                localLoginInterval = undefined;
                registerNotificationInterval();
            }
        }, 100);
    }

});

function toggleDropDown(ele) {
    if ($(ele).css("display") === 'none') {
        $(ele).css("display", "block");
    } else {
        $(ele).css("display", "none");
    }
}

var isFunction = function (functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function logout(callbackFunction, arrParams) {
    $.ajax({
        type: 'POST',
        url: '/logout',
        data: { type: 'quick' },
        datatype: 'json',
        timeout: 5000
    }).success(function(res, status, req) {
        if ((location.pathname.indexOf("/manage") >= 0)
            || (location.pathname.indexOf("/stats") >= 0)
                || (location.pathname.indexOf("/dashboard") >= 0)) {
            window.location.href = "/";
            return;
        }
        updateLoginMenu();
        stopNotificationInterval();
        isLogin = false;
        if (callbackFunction) {
            callbackFunction.apply(null, arrParams);
        }
    }).fail(function(req, status, error) {
        log("Error: " + error);
    });
}

$('html').click(function(e) {
    if ((e.target.parentElement.id !== 'avatarDropDown') && (e.target.parentElement.id !== 'loginDropdown')
         && (e.target.id !== 'loginDropdown')) {
        $('#loginDropdown').css("display", "none");
    }
    if ($('#preview').css('display') !== 'none') {
        $('#preview').css('display', 'none');
    }
});

var updateLoginMenu = function() {
    if(window.location.hostname=='') {
        return;
    }

    if ($('#header .right-header')) {
        $('#header .right-header').remove();
    }

    $.ajax({
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        url: api_base+'loginstatus',
        dataType: 'json',
        timeout: 5000
    }).done(function(result, status, req) {
        if (DEVICE.type == 'smartphone' || DEVICE.type == 'tablet') {
            $('.headerMenu .infoOther ul').empty().append(result.data.header_html);
            if ($('.headerMenu #logoutbt').length > 0) {
                $('.headerMenu #logoutbt').remove();
            } else {
                $('.headerMenu #navigation').after(result.data.user_menu_html);
            }
        } else {
            $('#header .headerTop .container form.search').after(result.data.header_html + result.data.user_menu_html);
            var $avatar = $('#header').find('.toolbox img');
            if ($avatar.attr('src') == '') {
                $avatar.attr('src', CONFIG.BASE_STATIC+'/css/image/bg_no-user-avatar.png');
            }
        }
        if(typeof result.data.isLogin == 'boolean') {
            isLogin = result.data.isLogin;
        }
        $(document).foundation();
    }).fail(function(req, status, error) {
        log("Can't not retrieve user login status!");
    });
};

var registerNotificationInterval = function() {
    notificationInterval = window.setInterval(function() {
        getNotificationItems();
    }, 15000);
};

var stopNotificationInterval = function() {
    clearInterval(notificationInterval);
    notificationInterval = undefined;
};

var resetNotificationCounter = function() {
    var counter = $('.newNotifi .notififeed .totalNewnotifi');
    counter.html("");
    counter.hide();
    $.ajax({
        url: '/notification/resetcounter'
    });
};

var resetFeedCounter = function() {
    var counter = $('.newWatchs .watchshow .totalNewwatchs');
    counter.html("");
    counter.hide();
    $.ajax({
        url: '/videoFeed/resetcounter'
    });
};

var preloadFirstNotificationItems = function () {
    getNotificationItems(0, 7, function() {
        /*$(".arrowbox ul").mCustomScrollbar({
            callbacks: {
                onTotalScroll : function() {
                    loadMore();
                }
            },
            onTotalScrollOffset: 100,
            alwaysTriggerOffsets: false
        });*/
        $(".arrowbox ul").niceScroll({
            touchbehavior : false,
            horizrailenabled : false,
            scrollspeed : "200",
            cursorcolor : "#d7d7d7",
            cursoropacitymax : 0.7,
            cursorwidth : 6,
            cursorborder : "none",
            cursorborderradius : "16px",
            background : "#ebebeb",
            autohidemode : false
        });

        changeDisplayTimestamp();
        resetNotificationCounter();
    });
};

var getNotificationItems = function(start, count, callbackFn) {
    $.ajax({
            url: '/pull/notification/getNotification',
            type: 'POST',
            datatype: 'json',
            data: {start: start, count: count},
            success: function(res) {
                var numNotifi = res.data.notificationCounter,
                    feedCounter = $('.newWatchs .watchshow .totalNewwatchs');
                if(res.err == 0 && res.data.appendedItems && (numNotifi > 0 || start == 0)) {
                    var notifiCounter = $('.newNotifi .notififeed .totalNewnotifi'),
                        msContainer = $('#notifyfeedBox .arrowbox ul .mCSB_container'),
                        parent = msContainer.length == 0 ? $('#notifyfeedBox .arrowbox ul') : msContainer;
                    if(numNotifi > 0) {
                        notifiCounter.html(numNotifi);
                        notifiCounter.show();
                    }

                    if((numNotifi > 0 && parent.children().length > 1) || start == 0) {
                        if(res.data.lastItem) {
                            $('.newNotifi #notifyfeedBox .arrowbox #lastItem').html(res.data.lastItem);
                        }
                        parent.prepend(res.data.appendedItems);
                        if(typeof callbackFn == 'function') {
                            callbackFn.apply(undefined, []);
                        }
                    }
                    $('#notifyfeedBox .arrowbox .noInfo').hide();
                } else if (res.err == 0 && !res.data.appendedItems && start == 0) {
                    // display no result text
                    $('#notifyfeedBox .arrowbox .noInfo').show();
                }

                if(res && res.data && res.data.feedCounter > 0) {
                    feedCounter.html(res.data.feedCounter > 20 ? "20+" : "" + res.data.feedCounter);
                    feedCounter.show();
                }
            },
            error: function(err) {

            }
    });
};

var openBoxAndPreloadFirstItems = function () {
    var parent = $('#notifyfeedBox .arrowbox ul'),
        firstChild;
    toggleDropDown("#notifyfeedBox");
    if(!$("#notifyfeedBox").is(':hidden')) {
        if(parent.children().length == 1) {
            firstChild = parent.children().first();
            if("loading" == firstChild.attr('id')) {
                parent.children().first().hide();
                preloadFirstNotificationItems();
            }
        }
        changeDisplayTimestamp();
        resetNotificationCounter();
        $('#ascrail2000').show(); //show notify scroll bar
    }
};

var loadMore = function () {
    var fromId = $('.newNotifi #notifyfeedBox .arrowbox #lastItem'),
        fromIdValue = fromId.html(),
        loadingBox = $('#notifyfeedBox .arrowbox ul #loading');
    if(hasMore && fromIdValue != '-1') {
        // -1 is init state
        loadingBox.show();
        $.ajax({
                url: '/pull/notification/loadmore',
                type: 'POST',
                datatype: 'json',
                data: {fromId: fromIdValue, count: 5},
                success: function(res) {
                    if(res.err == 0 && res.data.appendedItems) {
                        var msContainer = $('#notifyfeedBox .arrowbox ul .mCSB_container'),
                            parent = msContainer.length == 0 ? $('#notifyfeedBox .arrowbox ul') : msContainer;
                        parent.append(res.data.appendedItems);
                        fromId.html(res.data.lastId);
                    } else if (!res.data.lastId) {
                        hasMore = false;
                    }
                    loadingBox.hide();
                    changeDisplayTimestamp();
                },
                error: function(err) {

                }
        });
    }
};

var changeDisplayTimestamp = function() {
    var feedContainer = $('#notifyfeedBox .arrowbox #feedContainer'),
        mSCBContainer = $('#notifyfeedBox .arrowbox #feedContainer .mCustomScrollBox .mCSB_container'),
        parent = typeof mSCBContainer !== 'undefined' ? mSCBContainer : feedContainer;

    parent.children('li').each(function() {
        var timeTs = $(this).find('.video .meta .timeago_ts')[0].innerHTML,
            displayTimeBox = $(this).find('.video .meta .timeago')[0];
        if(timeTs) {
            displayTimeBox.innerHTML = moment(timeTs, 'x').fromNow();
        }
    });
};

/**
 * Logging mechanism
 */
if (Function.prototype.bind && ( typeof console == "object" || typeof console == "function") && typeof console.log == "object") {
    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(method) {
        console[method] = this.call(console[method], console);
    }, Function.prototype.bind);
}
if (!window.log) {
    window.log = function() {
        if (typeof debug_mode != "undefined" && debug_mode===true) {
            log.history = log.history || [];
            log.history.push(arguments);
            if ( typeof console != 'undefined' && typeof console.log == 'function') {
                if (window.opera) {
                    var i = 0;
                    while (i < arguments.length) {
                        console.log("Item " + (i + 1) + ": " + arguments[i]);
                        i++;
                    }
                } else if ((Array.prototype.slice.call(arguments)).length == 1 && typeof Array.prototype.slice.call(arguments)[0] == 'string') {
                    console.log((Array.prototype.slice.call(arguments)).toString());
                } else {
                    console.log(Array.prototype.slice.call(arguments));
                }
            } else if (!Function.prototype.bind && typeof console != 'undefined' && typeof console.log == 'object') {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            } else {
                if (!document.getElementById('firebug-lite')) {
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.id = 'firebug-lite';
                    script.src = 'https://getfirebug.com/firebug-lite.js';
                    document.getElementsByTagName('HEAD')[0].appendChild(script);
                    setTimeout(function() {
                        log(Array.prototype.slice.call(arguments));
                    }, 2000);
                } else {
                    setTimeout(function() {
                        log(Array.prototype.slice.call(arguments));
                    }, 500);
                }
            }
        }
    };
}

function startTimer() {
    return (new Date()).getTime();
}

function showTimerDuration(startTimer, label) {
    var duration = (new Date()).getTime() - startTimer;
    // duration = Math.round(duration/1000);
    log(label+": "+duration+" milliseconds");
}

var page_id = function(){
    page_url = window.location.href;
    var matches = page_url.match(/_video(\d+)\.html/i);
    if(matches && matches.length==2) {
        return matches[1];
    } else {
        var youtube = page_url.match(/_youtube([^.]+)\.html/i);
        if (youtube) {
            return youtube[1];
        } else {
            return null;
        }

    }
}

var getplaylistId = function () {
	if (QueryString().playlist) {
		return QueryString().playlist;
	} else {
		page_url = window.location.href;
		var matches = page_url.match(/_playlist(\d+)\.html/i);
		if (matches && matches.length == 2) {
			return matches[1];
		} else {
			return undefined;
		}
	}
}

function formatFriendlyCount(count) {
    var unit = Math.floor(count/100000) / 10;
    if (unit >= 1) return unit + "M";
    unit = Math.floor(count/100) / 10;
    if (unit >= 1) return unit + "K";
    return count;
}

function formatFriendlyTime(milliseconds) {
    var today = new Date();
    var published = new Date(milliseconds);
    var differences = Math.round((today - published)/1000);
    var days = Math.floor(differences / 86400);

    if (days == 0) {
        differences = differences - days*86400;
        var hours = Math.floor(differences / 3600);
        if (hours < 12) return hours + " giờ trước";
        else return "Hôm nay";
    } else {
        var year = Math.floor(days/365);
        if (year > 0) return year + " năm trước";
        var months = Math.floor(days/30);
        if (months > 0) return months + " tháng trước";
        var weeks = Math.floor(days/7);
        if (weeks > 0) return weeks + " tuần trước";
        return days + " ngày trước";
    }
}

function formatDateFromMili(milliseconds) {
    var published = new Date(milliseconds);
    var dd = published.getDate();
    if ( dd < 10 ) {
        dd = '0' + dd;
    }
    var mm = published.getMonth()+1;
    if ( mm < 10 ) {
        mm = '0' + mm;
    }
    var yy = published.getFullYear();
    if ( yy < 10 ) {
        yy = '0' + yy;
    }
    return dd+'/'+mm+'/'+yy;
}

// offsetRelative (or, if you prefer, positionRelative)
(function($){
    $.fn.offsetRelative = function(top){
        var $this = $(this);
        var $parent = $this.offsetParent();
        var offset = $this.position();
        if(!top) return offset; // Didn't pass a 'top' element
        else if($parent.get(0).tagName == "BODY") return offset; // Reached top of document
        else if($(top,$parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to
        else if($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to
        else { // Get parent's relative offset
            var parent_offset = $parent.offsetRelative(top);
            offset.top += parent_offset.top;
            offset.left += parent_offset.left;
            return offset;
        }
    };
    $.fn.reverseChildren = function() {
        return this.each(function(){
            var $this = $(this);
            $this.children().each(function(){
              $this.prepend(this);
            });
        });
    };
    $.fn.positionRelative = function(top){
        return $(this).offsetRelative(top);
    };
}(jQuery));

function formatTimePlayer(seconds) {
    seconds = Math.round(seconds);
    // console.log(seconds);
    var hours = Math.floor(seconds/3600);
    seconds = seconds - hours*3600;
    var mins = Math.floor(seconds/60);
    seconds = seconds - mins*60;
    var output = '';
    if(hours>0 && hours<10) {
        output += '0'+hours+':';
    } else if (hours >= 10) {
        output += hours+':';
    }
    if(mins==0) {
        output += '00:';
    } else if (mins<10) {
        output += '0'+mins+':';
    } else {
        output += mins+':';
    }
    if(seconds==0) {
        output += '00';
    } else if (seconds < 10) {
        output += '0'+seconds;
    } else {
        output += seconds;
    }
    // console.log(output);
    return output;
}

function Dialog() {
    var self = this;
    var $overlay = $('#dialogs');

    this.show = function(id, callback) {
        var $dialog = $('#'+id);
        if ($dialog.length == 0) return;

        $overlay.show();
        $dialog.bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $dialog.removeClass('animated zoomIn');
            if (typeof callback == 'function') {
                setTimeout(callback,200);
            }
        });
        $dialog.show();
        if ('true' == $dialog.attr('autosize')) {
            var height = 110 + $dialog.find('.dialog-content').height();
            console.log('dialog content:'+$dialog.find('.dialog-content').height());
            console.log(height);
            $dialog.css('height', height+'px');
        }
        $dialog.addClass('animated zoomIn');
    }

    this.hide = function(id, callback) {
        var $dialog = $('#'+id);
        if ($dialog.length == 0) return;
        $dialog.bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $dialog.removeClass('animated zoomOut');
            $overlay.hide();
            $dialog.hide();
            $dialog.remove();
            if (typeof finish == 'function') {
                setTimeout(finish,200);
            }
        });
        $dialog.addClass('animated zoomOut');
    }

    this.open = function(id, title, body, buttons, options, callback) {
        var $dialog = generateDialogHTML(
            id, title, body, buttons, options
        );
        self.show(id);
    }

    /**
     * Generate required html structure for dialog
     * @param  {string} id      id of the dialog
     * @param  {string} title   title text
     * @param  {string} content html of dialog content
     * @param  {object} action  {default:{label, icon, action}, alternative: {label, icon, action}, dismiss: {label, icon, action}}
     * @param  {object} options {width, height}
     * @return {jQuery dialog object}
     */
    var generateDialogHTML = function(id, title, content, action, options) {
        if ($('#'+id).length > 0) return $('#'+id);
        var $dialog = $('<div>').addClass('dialog');
        var html = '';

        // dialog header
        html += '<div class="dialog-header"><h1>';
        if (options && options.icon) {
            html += '<span class="'+options.icon+'"></span>';
        }
        html += title+'</h1>';
        html += '<a class="btnClose" href="javascript:Dialog.hide(\''+id+'\')"><span class="icon-webs closeicon"></span></a>';
        html += '</div>';

        // dialog content
        html += '<div class="dialog-content">';
        html += content;
        html += '</div>';

        // dialog action
        html += '<div class="dialog-action">';
        if (action && action.default) {
            html += '<a class="btnDefault">';
            html += (action.default.icon) ? '<span class="'+action.default.icon+'"></span>' : '';
            html += (action.default.label) ? action.default.label : ''
            html +='</a>';
        }
        if (action && action.alternative) {
            html += '<a class="btnAlternative">';
            html += (action.alternative.icon) ? '<span class="'+action.alternative.icon+'"></span>' : '';
            html += (action.alternative.label) ? action.alternative.label : ''
            html +='</a>';
        }
        if (action && action.dismiss) {
            html += '<a class="btnCancel">';
            html += (action.dismiss.icon) ? '<span class="'+action.dismiss.icon+'"></span>' : '';
            html += (action.dismiss.label) ? action.dismiss.label : 'Đóng'
            html +='</a>';
        }
        html += '</div>';
        $dialog.append(html);

        // dialog id
        $dialog.attr('id', id);

        // dialog options size
        if (options && options.width) {
            $dialog.css({'width':options.width+'px', 'margin-left': - Math.round(options.width/2)+'px'});
        }

        if (options && options.height) {
            $dialog.css({'height':options.height+'px', 'margin-top': - Math.round(options.height/2)+'px'});
        } else {
            $dialog.attr('autosize','true');
            $dialog.find('.dialog-content').css('bottom', 'auto');
        }

        // action default
        if (action && action.default) {
            if (action.default.action) {
                $dialog.find('.dialog-action .btnDefault').on('click', function(e) {
                    e.preventDefault();
                    setTimeout(action.default.action, 100);
                });
            } else {
                $dialog.find('.dialog-action .btnDefault').on('click', function(e) {
                    e.preventDefault();
                    self.hide(id);
                });
            }
        }

        // action alternative
        if (action && action.alternative) {
            if (action.alternative.action) {
                $dialog.find('.dialog-action .btnAlternative').on('click', function(e) {
                    e.preventDefault();
                    setTimeout(action.alternative.action, 100);
                });
            } else {
                $dialog.find('.dialog-action .btnAlternative').on('click', function(e) {
                    e.preventDefault();
                    self.hide(id);
                });
            }
        }

        // action dismiss
        if (action && action.dismiss) {
            if (action.dismiss.action) {
                $dialog.find('.dialog-action .btnCancel').on('click', function(e) {
                    e.preventDefault();
                    setTimeout(action.dismiss.action, 100);
                });
            } else {
                $dialog.find('.dialog-action .btnCancel').on('click', function(e) {
                    e.preventDefault();
                    self.hide(id);
                });
            }
        }


        if ($overlay.length == 0) {
            $overlay = $('<div>').addClass('dialog-overlay black').attr('id','dialogs');
            $('body').append($overlay);
            log('Dialogs wrapper append to html');
        }

        $overlay.append($dialog);
        log('Dialog #'+id+' generated and append to html');

        return $dialog;
    }

    this.showReportDialog = function() {
        var $reportDialog = generateDialogHTML(
            'dialog-report',
            'Báo xấu',
            '<p>Nếu bạn nghĩ rằng nội dung video này không nên xuất hiện trên VideoFly, hãy giúp chúng tôi bằng cách gửi báo xấu về cho ban quản trị bằng cách bấm nút bên dưới hoặc gửi email về địa chỉ <a href="mailto:bqt@videofly.vn">bqt@videofly.vn</a>. Chúng tôi sẽ kiểm tra và có hành động phản hồi trong thời gian nhanh nhất có thể.</p>',
            {
                dismiss: {
                    'label': 'Đóng'
                },
                alternative: {
                    'label': 'Báo xấu video đang xem'
                }
            }
        )
        self.show('dialog-report');
    }

    this.showFeedbackPopup = function() {
        var loginemail = $('.feedbackbtn').find('#loginemail').val();

        var html = '';
        html += '<div id="vf-feedback">';
        html += '<label for="username">Email</label>';
        if(loginemail == '#email' || loginemail == ''){
            html += '<input id="userlogin" class="username" type="email" name="userlogin" placeholder="example@somewhere.com">';
        }else{
            html += '<input id="userlogin" class="username" type="email" name="userlogin" placeholder="'+loginemail+'" disabled="true" value="'+loginemail+'">';
        }
        html += '<label id="email-validation"></label>';
        html += '<label for="content feedback">Nội dung</label>';
        html += '<textarea id="contenttxt" class="content-fb" name="contenttxt" cols="30" maxlength="1000" minlength="10" placeholder="" required></textarea>';
        html += '<label id="text-validation"></label>';
        html += '<input id="send-feedback" type="submit" name="oktxt" value="Gửi" onClick="javascript:Dialog.postFeedback();"></div>';
        var $feedback_dialog = generateDialogHTML(
            'dialog-feedback',
            'Góp Ý',
            html,
            {
                dismiss: {
                    label: 'Đóng'
                }
            }
        );
        self.show('dialog-feedback');
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    this.postFeedback = function (){
        // e.preventDefault();
        var userlogin = $('#dialog-feedback #userlogin.username').val();
        var isvalidemail = validateEmail(userlogin);
        var contenttxt = $('#dialog-feedback #contenttxt.content-fb').val();
        if (userlogin.trim()!="" && contenttxt.trim()!="") {
            if(isvalidemail){
                var form_data = {
                    email: userlogin,
                    content: contenttxt
                }
                $.ajax({
                    type: 'POST',
                    url: '/email/feedback',
                    data: form_data,
                    datatype: 'json'
                }).success(function(res, status, req) {
                    // console.log(res);
                    $('#dialog-feedback').find('#vf-feedback').hide();
                    $('#dialog-feedback').find('.dialog-content').append('<p>Thân chào bạn,</p>');
                    $('#dialog-feedback').find('.dialog-content').append('<p>VideoFly đã nhận được góp ý của bạn. Videofly xin ghi nhận và sẽ ngày càng hoàn thiện để mang đến bạn những trải nghiệm tốt hơn.</p>');
                    $('#dialog-feedback').find('.dialog-content').append('<p>Cám ơn bạn rất nhiều!</p>');
                }).fail(function(req, status, error) {

                });
            }else{
                $('#dialog-feedback #email-validation').html("Vui lòng nhập địa chỉ email hợp lệ");
                $('#dialog-feedback #email-validation').css("color", "red");
                if(contenttxt.trim()==""){
                    $('#dialog-feedback #text-validation').html("Bạn nên điền vào nội dung ");
                    $('#dialog-feedback #text-validation').css("color", "red");
                }
            }
        }else{
            if(userlogin.trim()==""){
                $('#dialog-feedback #email-validation').html("Bạn nên điền thông tin email");
                $('#dialog-feedback #email-validation').css("color", "red");
            }
            if(contenttxt.trim()==""){
                $('#dialog-feedback #text-validation').html("Bạn nên điền vào nội dung ");
                $('#dialog-feedback #text-validation').css("color", "red");
            }
        }
    }

    this.showSmallLoginPopup = function(callbackFunction, arrParams) {
        //if (!isLogin) {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                url: api_base+'sessioncheckvalid',
                dataType: 'json',
                timeout: 5000
            }).done(function(result, status, req) {
                isLogin = result.data.isLogin;

                html = '<iframe id="login-frame" src="" scrolling="no" width="600" height="400"></iframe>';
                var $login = generateDialogHTML(
                    'dialog-smalllogin',
                    'Đăng nhập',
                    html,
                    {
                        dismiss: {
                            label: 'Đóng'
                        }
                    }
                );
                $login.find('.dialog-content').css('padding', '0px');
                $login.find('.dialog-content #login-frame').attr("src", login_url);

                if (!myLoginInterval) {
                    myLoginInterval = window.setInterval(function () {
                        if ($.cookie('JSESSID')) {
                            console.log("call updateLoginMenu");
                            self.hide('dialog-smalllogin');
                            updateLoginMenu();
                            isLogin = true;
                            if (isFunction(callbackFunction)) {
                                callbackFunction.apply(null, arrParams);
                            }
                            clearInterval(myLoginInterval);
                            myLoginInterval = undefined;

                            registerNotificationInterval();

                        }
                    }, 100);
                }
                self.show('dialog-smalllogin');
            }).fail(function(req, status, error) {
                log("Can't not retrieve user login status!");
            });

        //}
    }

    this.showLoginDialog = function() {
        if (!isLogin) {
            var html = '';
            html += '<p><label>Tên đăng nhập:</label><input id="username" type="text"/></p>';
            html += '<p><label>Mật khẩu:</label><input id="password" type="text"/></p>';
            html += '<div id="submit_loading"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>';
            html += '<div id="submit_success"><p><span class="ti-check"></span><br /> Bạn đã đăng nhập thành công hãy tiếp tục trải nghiệm. </p></div>';
            html += '<div id="submit_error"><p><span class="ti-face-sad"></span></p><p>Có lỗi xảy ra trong quá trình đăng nhập. Bạn vui lòng nhấn vào <a href="/login" target="_blank">đây</a> để chuyển sang trang đăng nhập.<br /></p></div>';
            var $login = generateDialogHTML(
                'dialog-notlogin',
                'Đăng nhập',
                html,
                {
                    dismiss: {
                        label: 'Đóng'
                    },
                    alternative: {
                        label: 'Đăng ký thành viên',
                        action: function() {
                            window.location.href = "/register";
                        }
                    },
                    default: {
                        label: 'Đăng nhập',
                        action: function() {
                            // call ajax for login here
                            var form_data = {
                                username: $login.find('#username').val().trim(),
                                password: $login.find('#password').val().trim()
                            }
                            // if (form_data.username == "" || form_data.username)
                        }
                    }
                }
            );
            self.show('dialog-notlogin');
            $login.find('#submit_loading').hide();
            $login.find('#submit_success').hide();
            $login.find('#submit_error').hide();
            return;
        }
    }

    this.showUploadDialog = function() {
        if (!isLogin) {
            var $login = generateDialogHTML(
                'dialog-notlogin',
                'Bạn chưa đăng nhập',
                '<p>Bạn chưa đăng nhập. Trở thành thành viên của VideoFly.vn để cùng chia sẻ những video hay nhất với cộng đồng!</p>',
                {
                    dismiss: {
                        label: 'Đóng'
                    },
                    alternative: {
                        label: 'Đăng ký thành viên',
                        action: function() {
                            window.location.href = "/register";
                        }
                    },
                    default: {
                        label: 'Đăng nhập',
                        action: function() {
                            window.location.href = "/login";
                        }
                    }
                }
            );
            self.show('dialog-notlogin');
            return;
        }
        var html = '';
        html += '<p><label>Nhập đường dẫn video bạn muốn giới thiệu:</label><input id="youtube_url" type="text" placeholder="https://www.youtube.com/watch?v=j1Pw0dr3nSI" /></p>';
        html += '<div id="video_data">';
        html += '<p class="message">Vui lòng nhập đường dẫn video youtube bạn muốn thêm ở trên</p>';
        html += '</div>';
        html += '<div id="submit_loading"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>';
        html += '<div id="submit_success"><p><span class="ti-check"></span><br />Video đã tạo thành công. Video của bạn sẽ chờ duyệt trước khi được hiển thị trên trang. Chia sẻ với bạn bè sử dụng liên kết bên dưới:<br /><a href="#" target="_blank"></a></p><iframe src="" width="560" height="315"></iframe></div>';
        html += '<div id="submit_error"><p><span class="ti-face-sad"></span></p><p>Có lỗi xảy ra trong quá trình xử lý video. Vui lòng thử lại sau!<br /><span id="submit_error_code"></span></p></div>';
        var $upload_dialog = generateDialogHTML(
            'dialog-upload',
            'Giới thiệu video',
            html,
            {
                dismiss: {
                    label: 'Đóng'
                },
                alternative: {
                    label: 'Xem video của tôi',
                    action: function() {
                        window.location.href = $('.toolbox li a').attr('href');
                    }
                },
                default: {
                    label: 'Thêm video',
                    icon: 'ti-plus',
                    action: function() {
                        $upload_dialog.find('.btnDefault').hide();
                        $upload_dialog.find('#submit_loading').show();
                        var form_data = {
                            tag: $upload_dialog.find('#video_tags').val(),
                            title: $upload_dialog.find('#video_title').val(),
                            video_id: $upload_dialog.find('#video_id').val(),
                            embedcode: $upload_dialog.find('#video_embed').val(),
                            duration: $upload_dialog.find('#video_duration').val(),
                            content: $upload_dialog.find('#video_description').val(),
                            thumbnail: $upload_dialog.find('#video_thumbnail').val(),
                            user_id: $('.toolbox').attr('user-id') ? parseInt($('.toolbox').attr('user-id')) : 64
                        }
                        // console.log(form_data);
                        if (form_data.title.trim()=="" || form_data.video_id.trim()=="" || form_data.embedcode.trim()=='' || form_data.thumbnail.trim()=='') {
                            $upload_dialog.find('.btnDefault').show();
                            $upload_dialog.find('#submit_loading').hide();
                        } else {
                            $.ajax({
                                type: 'POST',
                                url: '/manage/importyoutube',
                                data: form_data,
                                datatype: 'json',
                                timeout: 5000
                            }).success(function(res, status, req) {
                                console.log(res);
                                if (res.err == 0) {
                                    $upload_dialog.addClass('dialog-uploadSuccess');
                                    $upload_dialog.css('height', '280px');
                                    $upload_dialog.find('#submit_loading').hide();
                                    $upload_dialog.find('.btnAlternative').show();
                                    $upload_dialog.find('.btnAlternative').click(function() {
                                        window.open('//'+window.location.host+'/_video'+res.data+'.html', '_blank');
                                    });
                                    // $upload_dialog.find('#submit_success iframe').attr('src', '//'+window.location.host+'/embed/'+res.data);
                                    $upload_dialog.find('#submit_success a').attr('href','//'+window.location.host+'/_video'+res.data+'.html').text(window.location.protocol + '//' + window.location.host+'/_video'+res.data+'.html');
                                    $upload_dialog.find('#submit_success').show();
                                } else {
                                    var errMessage = 'Lỗi hệ thống hãy liên hệ với quản trị viên.';
                                    switch(parseInt(res.err)) {
                                        case -119:
                                            errMessage = 'Video này đã tồn tại, vui lòng xem lại danh sách video của bạn.';
                                            break;
                                        case -3:
                                            errMessage = 'Có thể bạn chưa đăng nhập, hoặc điền thiếu thông tin cho video.';
                                            break;
                                        case -122:
                                            errMessage = 'Vui lòng đăng nhập để sử dụng tính năng này.';
                                            break;
                                        default:
                                            errMessage = 'Lỗi hệ thống hãy liên hệ với quản trị viên.';
                                    }
                                    $upload_dialog.find('#submit_loading').hide();
                                    $upload_dialog.find('#submit_error_code').text("(Lỗi: "+errMessage+")");
                                    $upload_dialog.find('#submit_error_code').css("color", "red");
                                    $upload_dialog.find('#submit_error').show();
                                    $upload_dialog.find('.btnDefault').hide();
                                }
                            }).fail(function(req, status, error) {
                                $upload_dialog.find('.btnDefault').show();
                                var errMessage = 'Không nhận được phản hồi từ Youtube, hãy kiểm tra lại kết nối.';
                                $upload_dialog.find('#submit_loading').hide();
                                $upload_dialog.find('#submit_error_code').text("(Lỗi: "+errMessage+")");
                                $upload_dialog.find('#submit_error_code').css("color", "red");
                                $upload_dialog.find('#submit_error').show();
                                $upload_dialog.find('.btnDefault').hide();
                            });
                        }
                    }
                }
            },
            {
                'icon': 'ti-video-camera',
                'width': 600,
                'height': 460
            }
        );
        $upload_dialog.find('.btnAlternative').hide();
        var timeout;
        $upload_dialog.find('#youtube_url').on('keyup', function(){
            var youtube_url = $(this).val();
            if (youtube_url.trim() == '') {
                $upload_dialog.find('#video_data').html('<p class="message">Vui lòng nhập đường dẫn video youtube bạn muốn thêm ở trên</p>');
                return;
            }
            clearTimeout(timeout);
            timeout = autoFillYoutube(youtube_url, $upload_dialog);
        });
        self.show('dialog-upload');

        // var youtube_id = page_id() + '';
        // if (youtube_id && youtube_id.match(/\w+/ig)) {
        //     $upload_dialog.find('#youtube_url').val('https://www.youtube.com/watch?v='+youtube_id);
        //     timeout = autoFillYoutube('https://www.youtube.com/watch?v='+youtube_id, $upload_dialog);
        // }
    }

    var autoFillYoutube = function(youtube_url, $upload_dialog) {
        return setTimeout(function (){
            $upload_dialog.find('#video_data').html('<div class="loading"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>');
            Youtube.fetchVideoDetail(youtube_url, function(err, data) {
                if (err != undefined && err < 0) {
                    $upload_dialog.find('.btnDefault').show();
                    $upload_dialog.find('#submit_loading').hide();
                    $upload_dialog.find('#submit_error_code').text("(Lỗi: "+ data +")");
                    $upload_dialog.find('#submit_error_code').css("color", "red");
                    $upload_dialog.find('#submit_error').show();
                    $upload_dialog.find('.btnDefault').hide();
                    return;
                }
                var html = "";
                html += '<p class="video_thumb_preview" style="background-image:url('+data.thumbnail+')"></p>';
                html += '<div class="video_meta">';
                html +=     '<p><input type="text" id="video_title" placeholder="Tiêu đề video" value="'+data.title+'" /></p>';
                html +=     '<p><input type="text" id="video_tags" placeholder="Từ khóa mô tả ngăn cách bằng dấu phẩy" /></p>';
                html +=     '<p class="category">';
                html +=     '<input type="hidden" disabled id="video_duration" name="video_duration" value="'+data.duration+'"/>';
                html +=     '<p><span class="dangerMessage" style="display: none;">Hãy chọn một chuyên mục cụ thể cho video này.</span></p>';
                html +=     '</p>';
                html += '</div>';
                html += '<p><textarea id="video_description" placeholder="Mô tả nội dung video...">'+data.content+'</textarea></p>';
                html += '<input type="hidden" id="video_id" value="'+data.video_id+'"/>';
                html += '<input type="hidden" id="video_embed" value="'+data.embedcode+'"/>';
                html += '<input type="hidden" id="video_thumbnail" value="'+data.thumbnail+'"/>';
                $upload_dialog.find('#video_data').html(html);
                // console.log(data);
            })
        }, 300);
    }


    this.showEmbedDialog = function() {
        var html = '';
        html += '<p><label for="embed_code">Sao chép đoạn code bên dưới để nhúng video này vào trang web của bạn:</label>';
        html += '<input id="embed_code" type="text" value=\'<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="//'+window.location.host+'/embed/'+page_id()+'?recommendation=1" width="560" height="315"></iframe>\' />';
        html += '</p>';
        html += '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" id="embed_preview" src="//'+window.location.host+'/embed/'+page_id()+'"></iframe>';
        html += '<div class="options">';
        html += '<p><strong>Kích thước embed: </strong><label><input type="radio" value="large" class="embed_size_large" name="embed_size" /> Lớn (640x360)</label><label><input type="radio" value="medium" class="embed_size_medium" name="embed_size" checked /> Vừa (560x315)</label><label><input type="radio" value="small" class="embed_size_small" name="embed_size" /> Vừa (360x242)</label></p>';
        html += '<p><strong>Tùy chọn: </strong><label><input type="checkbox" class="embed_autoplay" /> Tự động play</label><label><input type="checkbox" class="embed_recommend" checked /> Gợi ý sau khi kết thúc</label><label><input type="checkbox" class="embed_quality"  /> Chất lượng cao (nếu có)</label></p>';
        html += '</div>';
        var $embed_dialog = generateDialogHTML(
            'dialog-embed',
            'Mã nhúng video',
            html,
            {
                alternative: {
                    label: 'Cám ơn'
                }
            },
            {
                'icon': 'ti-shortcode',
                'width': 600,
                'height': 460
            }
        );
        $embed_dialog.find('input[type="radio"], input[type="checkbox"]').on('change', function(){

            var size="";
            if($('input.embed_size_medium').is(':checked')) {
                size = 'width="560" height="315"';
            } else if ($('input.embed_size_small').is(':checked')) {
                size = 'width="360" height="242"';
            } else {
                size = 'width="640" height="360"';
            }
            var params = '?';
            if($('input.embed_autoplay').is(':checked')) {
                params += 'autoplay=1&';
            }
            if($('input.embed_recommend').is(':checked')) {
                params += 'recommendation=1&';
            }
            if($('input.embed_quality').is(':checked')) {
                params += 'hd=1';
            }
            var url = '//'+window.location.host+'/embed/'+page_id()+params;
            $embed_dialog.find('#embed_code').val(
                '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="'+url+'" '+size+'></iframe>'
            );
            $embed_dialog.find('#embed_preview').attr('src', url);
        });
        self.show('dialog-embed');
    }
}


function Application() {
    var self = this;

    this.init = function(){
        setupSearch();
    }

    this.initSearchMobile = function() {
        var $search_form = $(".searchform");
        var $search_input = $(".searchform #searchinput");
        var $preview = $(".searchform .resultsearch");
        var old_search = '', search_query;
        var search_timer;

        //$('.searchform').hide();
        $('.bgsearch').hide();
        $(".headerTop .searchicon").click(function()
        {
            $('.searchform').show();
            $('#searchinput').focus();
            /*
            $('.bgsearch').show();
            $('.bgsearch').addClass('active');
            $(".bgsearch.active").click(function()
            {
                $('.searchform').hide();
                $('.bgsearch').hide();
            });*/
        });
        $(".searchform .deletebt").click(function()
        {
            $search_input.val('');
            $(".searchform .resultsearch .showresult ul").empty();
            $(".searchform .resultsearch").css('display', 'none');
        });        
    };

    var setupSearch = function(){
        var $search_form = $('#header form.search');
        var $search_input = $('#header form.search input[type="text"]');
        var $preview = $('#header form.search #preview');
        var old_search = '', search_query;

        var search_timer;
        $search_input.on('focus',function(e) {
            $search_form.addClass('focused');
        }).on('blur', function() {
            setTimeout(function(){
                $search_form.removeClass('focused');
            },200);
        }).keyup(function(e){
            if (e.which == 27) {
                $(this).blur();
                $(this).val('');
            }
        });

        var SEARCH_MATCH = window.location.href.match(/\/(search)*\?(s|q)=([^&]+)/i);
        if (SEARCH_MATCH && typeof SEARCH_MATCH[3] != 'undefined' && SEARCH_MATCH[3].trim() != "") {
            var $result_list = $('#results-video');
            var max_fill = 24 - $result_list.find('.video').length;
            // if (max_fill > 0) {
            //     var keyword = SEARCH_MATCH[3].replace(/\+/i,'%20');
            //     Youtube.searchVideo(keyword, {max_results: max_fill}, function (err, videos) {
            //         if (!err) {
            //             if (videos.length == 0 && max_fill==24) {
            //                 $('#search-empty').show();
            //                 return;
            //             }
            //             for (var i=0; i<videos.length && i < max_fill; i++) {
            //                 $result_list.append(renderYoutubeVideo(videos[i]));
            //             }
            //         }
            //     });
            // }

        }

    }

    var search = function(keywords, options, callback) {
        var search_query = {
            'keyword':keywords,
            'preview': 1
        };
        if(options && options.orderby) {
            search_query.orderby = options.orderby;
        } else {
            search_query.orderby = 'title';
        }
        if(options && options.count) {
            search_query.c = parseInt(options.count);
        } else {
            search_query.c = 3;
        }
        return $.ajax({
            type: 'POST',
            url: api_base + "search",
            data: search_query,
            dataType: 'json',
            timeout: 5000
        }).done(function(data, status, req) {
            // console.log(data);
            if(data.err==0) {
                callback(null, data.data);
            } else {
                callback(data.error);
            }
        }).fail(function(req, status, error) {
            if(typeof callback == 'function') {
                callback(error);
            }
        });
    }

    var renderUser = function(user, keyword, wrapper) {
        if(!user) return;
        if(!wrapper) wrapper = 'div';
        var uId = user.userId + "";
        var $elm = $('<'+wrapper+'>',{'class':'user', 'user-id':uId});
        var html = '';

        if (user.displayName && user.displayName.trim() != "") {
            html += '<a title="' + user.displayName + '" href="/channel/' + user.userName + '#qsc=' + keyword + '">';
        } else {
            html += '<a title="' + user.userName + '" href="/channel/' + user.userName + '#qsc=' + keyword + '">';
        }
        if(user.avatarUrl) {
            html += '<span style="background-image:url(' + user.avatarUrl + ');background-size:cover" class="user-avatar"></span>';
        } else {
            html += '<span style="background-image:url(' + CONFIG.BASE_STATIC + "/img/bg_no-user-avatar.png" + ');background-size:cover" class="user-avatar"></span>';
        }
        if (user.displayName && user.displayName.trim() != "") {
            html += '<span class="user-name">';
            html += '<span class="user-login">@' + user.displayName + ' <span></span>';
        } else {
            html += '<span class="user-name no-name">';
            html += '<span class="user-login">@' + user.userName + ' <span></span>';
        }
        html += '<span class="video-count">'+user.countVideo+' video</span>';
        html += '</span></span></a>';
        $elm.html(html);
        return $elm;
    }

    var renderPlaylist = function(playlist, keyword, wrapper) {
        if(!playlist) return;
        if(!wrapper) wrapper = 'article';
        var pId = playlist.id + "";
        var $elm = $('<'+wrapper+'>',{'class':'video videoPlaylist', 'playlist-id':pId});
        var playlist_link = "//"+window.location.host+"/_playlist"+pId+".html?play=1#qsp=" + keyword;
        var html = '';

        html += '<p class="thumbnail" style="background-image: url(' + playlist.thumbUrl + ')">';
        html += '<a title="' + playlist.title + '" rel="bookmark" href="' + playlist_link + '">';
        html += '<img width="633" height="357" alt="' + playlist.title + '" src="' + playlist.thumbUrl + '">';
        html += '</a>';
        html += '<span class="videoTotal">' + playlist.videoCount + ' video</span>';
        html += '</p>';
        html += '<header class="meta">';
        html += '<h1 class="title">';
        html += '<a title="' + playlist.title + '" rel="bookmark" href="' + playlist_link + '"> <span class="ti-layers-alt"></span> ' + playlist.title + ' </a>';
        html += '</h1>';
        html += '<p class="uploader">';
        html += '<a title="' + playlist.user.displayName + '" href="/channel/' + playlist.user.userName + '">' + playlist.user.displayName + '</a>';
        html += '</p>';
        html += '<ul>';
        html += '<li class="watch-count">' + formatFriendlyCount(parseInt(playlist.viewCount)) + ' lượt xem</li>';
        html += '<li class="datetime">' + formatFriendlyTime(parseInt(playlist.createTs)) + '</li>';
        html += '</ul>';
        html += '</header>';

        $elm.html(html);
        return $elm;
    }

    var renderVideoSearchItem = function(video, keyword, wrapper) {
        if(!video) return;
        if(!wrapper) wrapper = 'article';
        var vId = video.videoId + "";

        var $elm = $('<'+wrapper+'>',{'class':'video', 'video-id':vId});
        var video_link = "//"+window.location.host + "/_video"+vId+".html#qsv=" + keyword;
        var html = '';

        html += '<p style="background-image: url(' + video.staticThumbUrl + ')" class="thumbnail">';
        html += '<a href="' + video_link + '" rel="bookmark" title="' + video.title + '">';
        html += '<img width="633" height="357" src="' + video.staticThumbUrl + '" alt="' + video.title + '">';
        html += '</a>';
        html += '<span class="duration">' + formatTimePlayer(video.duration) + '</span>';
        html += '</p>';
        html += '<header class="meta">';
        html += '<h1 class="title">';
        html += '<a href="' + video_link + '" rel="bookmark" title="' + video.title + '">' + video.title + '</a>';
        html += '</h1>';
        html += '<p class="uploader">';
        //html += '<a href="/channel/' + video.user.userName + '" title="' + video.user.displayName + '">' + video.user.displayName + '</a>';
        html += '</p>';
        html += '<ul>';
        html += '<li class="watch-count">' + formatFriendlyCount(parseInt(video.view)) + ' lượt xem</li>';
        console.log(video.uploadTs);
        if(video.uploadTs) {
            html += '<li class="datetime">' + formatFriendlyTime(parseInt(video.uploadTs)) + '</li>';
        }
        html += '</ul>';
        html += '</header>';

        $elm.html(html);
        return $elm;


    }
}

function Youtube() {

    var self = this;

    // get youtube video id from url. Accepted URL format include youtube.com/watch?v=XXX or youtu.be/XXX or youtube.com/embed/XXX
    this.getVideoId = function (video_url) {
        var match;
        if (video_url.search('watch=')) {
            match = video_url.match(/youtube\.com\/watch\?.*v=([^&]+)/i);
            return match ? match[1] : null;
        } else if (video_url.search('/embed/')) {
            match = video_url.match(/youtube.com\/embed\/([^?]+)/i);
            return match ? match[1] : null;
        } else if (video_url.search('youtu.be')) {
            match = video_url.match(/youtu.be\/([^?]+)/i);
            return match ? match[1] : null;
        } else {
            return null;
        }
    }

    this.searchVideo = function (keyword, options, callback) {
        if (!keyword || keyword.trim() == "") {
            callback("No keyword provided!");
            return;
        }
        var max_results = 50;
        if (options && options.max_results && options.max_results < 50) {
            max_results = options.max_results;
        }
        var api_url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBG1CAz5BcBkV-rRxuZ1ETrk6c2WU3ASUQ&part=snippet&order=relevance&type=video&videoSyndicated=true&maxResults='+max_results;
        api_url += '&q='+keyword;
        if (typeof debug_mode == 'undefined') {
            api_url += ' -dâm -18+ -18%20+ -sex -jav';
        }

        api_url += '&safesearch=strict';

        $.ajax({
            url: api_url,
            type: 'GET',
            dataType: 'json'
        })
        .success(function(res, status, req) {
            var videos = [];
            if (res.items) {
                for (var i=0;i<res.items.length;i++) {
                    videos.push(prepareVideoData(res.items[i]));
                }
            }
            callback(null, videos);
        })
        .fail(function(req, status, err) {
            callback ("Error fetching video from youtube: "+status);
        })
        .always(function() {

        });
    }

    // fetch video detail
    this.fetchVideoDetail = function (youtube_url, callback) {
        var video_id;

        if (youtube_url.search('//')>=0) {
            video_id = self.getVideoId(youtube_url);
        } else {
            video_id = youtube_url;
        }
        if (!video_id) {
            if (typeof callback == 'function') {
                callback("URL is not supported!");
            }
            return;
        }
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBG1CAz5BcBkV-rRxuZ1ETrk6c2WU3ASUQ&part=snippet,contentDetails,statistics,topicDetails,status&id='+video_id,
            dataType: 'json',
            timeout: 5000
        }).success(function(result, status, req) {
            var resData = {};
            if (result.items && result.items.length > 0) {
                var youtubeData = result.items[0];
                if (youtubeData.status.embeddable != true) {
                    resData = {error: -3, message: "Video này vi phạm quyền bảo mật và riêng tư, mời bạn chọn một video khác!"};
                    callback(resData.error, resData.message);
                } else if (youtubeData.status.privacyStatus == "private") {
                    resData = {error: -3, message: "Video này vi phạm quyền bảo mật và riêng tư, mời bạn chọn một video khác!"};
                    callback(resData.error, resData.message);
                } else if (result.items[0].contentDetails.regionRestriction != undefined
                    && result.items[0].contentDetails.regionRestriction.blocked != undefined
                    && result.items[0].contentDetails.regionRestriction.blocked.length > 0) {
                    resData = {error: -3, message: "Video này vi phạm quyền bảo mật và riêng tư, mời bạn chọn một video khác!"};
                    callback(resData.error, resData.message);
                } else {
                    callback(null, prepareVideoData(result.items[0]));
                }
            } else {
                log(result);
                resData = {error: -1, message: "Không tìm thấy Video bạn muốn import!"};
                callback(resData.error, resData.message);
            }
        }).fail(function(req, status, error) {
            if (typeof callback == 'function') {
                resData = {error: -2, message: "Không lấy được thông tin Video từ Youtube vui lòng thử lại sau!"};
                callback(resData.error, resData.message);
            }
        })
    }

    var prepareVideoData = function (video) {
        // console.log(video);
        var output = {};

        if (video.id && video.id.videoId) {
            output.video_id = video.id.videoId;
        } else if (video.id) {
            output.video_id = video.id;
        } else {
            return;
        }

        output.title = video.snippet.title;
        output.embedcode ='https://www.youtube.com/embed/'+output.video_id;
        output.content = video.snippet.description;
        output.publishedAt = formatYoutubePublishTime(video.snippet.publishedAt);
        output.internalUrl = "/"+output.title.replace(/[^\w\d\s]/ig,'');
        output.internalUrl += "_youtube"+output.video_id+".html";
	output.tags = video.snippet.tags;

        if (video.statistics) {
            output.viewCount = parseInt(video.statistics.viewCount);
            output.favouriteCount = parseInt(video.statistics.favoriteCount);
            output.likeCount = parseInt(video.statistics.likeCount);
        }

        if (video.snippet.channelId) {
            output.channelId = video.snippet.channelId;
        }

        if (video.contentDetails && video.contentDetails.duration) {
            output.duration = calculateYoutubeDuration(video.contentDetails.duration);
        }

        //thumbnail
        if (video.snippet.thumbnails.maxres) {
            output.thumbnail = video.snippet.thumbnails.maxres.url;
        } else if (video.snippet.thumbnails.standard) {
            output.thumbnail = video.snippet.thumbnails.standard.url;
        } else if(video.snippet.thumbnails.high) {
            output.thumbnail = video.snippet.thumbnails.high.url;
        } else if(video.snippet.thumbnails.medium) {
            output.thumbnail = video.snippet.thumbnails.medium.url;
        } else if(video.snippet.thumbnails.default) {
            output.thumbnail = video.snippet.thumbnails.default.url;
        }
        return output;
    }

    // fetch video from a channel
    this.fetchChannelVideo = function(channel_id, options, callback) {
        var max_results = (options && options.max_results) ? parseInt(options.max_results) : 50;
        var api_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBG1CAz5BcBkV-rRxuZ1ETrk6c2WU3ASUQ&part=snippet&maxResults="+max_results+"&order=date&type=video&channelId="+channel_id+"&videoSyndicated=true&safesearch=strict";
        $.ajax({
            url: api_url,
            type: 'GET',
            dataType: 'json'
        }).success(function(data, status, req) {
            // log(data);
            var videos = [];
            if (data.items) {
                for (var i=0; i<data.items.length; i++) {
                    videos.push(prepareVideoData(data.items[i]));
                }
            }
            callback(null, videos);
        }).fail(function(req, status, err) {
            log(err);
            callback("Error fetching channel video: "+status);
        });
    }
}

function displayFollowBox(channelId, channelName) {
    $.ajax({
        url: '/channelInfo/getSubscribeInfo?channelId=' + channelName,
        dataType: 'json',
        success: function(res) {
            var followBox = $('.btnFollow-' + channelId);
            if (res.err == 0) {
                if (res.data.channelOwner) {
                    displayStateOwner(followBox, channelId);
                } else if (res.data.subscribed) {
                    displayStateActive(followBox, channelId);
                } else {
                    displayStateDeactive(followBox, channelId);
                }
            }
        }
    });
};

function displayFollowPlaylist(objBtnFollowPL, playlistId) {
    $.ajax({
        url: '/playlist/getSubscribeInfo?playlist_id=' + playlistId,
        dataType: 'json',
        success: function(res) {
            //var followBox = $('.btnFollow-' + channelId);
            if (res.err == 0) {
                if (res.data) {
                    $(objBtnFollowPL).addClass("active");
                } else {
                    $(objBtnFollowPL).removeClass("active");
                }
            }
        }
    });
};

function displayFollowArtist(objBtnFollowAT, artistId) {
    $.ajax({
        url: '/artist/getSubscribeInfo?artistid=' + artistId,
        dataType: 'json',
        success: function(res) {
            //var followBox = $('.btnFollow-' + channelId);
            if (res.err == 0) {
                if (res.data) {
                    $(objBtnFollowAT).addClass("active");
                } else {
                    $(objBtnFollowAT).removeClass("active");
                }
            }
        }
    });
};

function subscribeChannel(action, channelId) {
    $.ajax({
        url: '/channelInfo/subscribe?channel=' + channelId +'&action=' + action
    });
};

function subscribePlaylist(action, playlistId) {
    $.ajax({
        url: '/playlist/subscribe?playlist_id=' + playlistId +'&action=' + action
    });
};

function subscribeArtist(action, artistId) {
    $.ajax({
        url: '/artist/subscribe?artistid=' + artistId +'&action=' + action
    });
};

function doSubscribePlaylist(objBtnFollowPL, playlistId){
    if($(objBtnFollowPL).hasClass('active')) {
        $(objBtnFollowPL).removeClass("active");
        subscribePlaylist('unsubscribe', playlistId);
    }else {
        $(objBtnFollowPL).addClass("active");
        subscribePlaylist('subscribe', playlistId);
    }
};

function doSubscribeArtist(objBtnFollowPL, artistId){
    console.log("* doSubscribeArtist, artistId=", artistId);
    if($(objBtnFollowPL).hasClass('active')) {
        $(objBtnFollowPL).removeClass("active");
        subscribeArtist('unsubscribe', artistId);
    }else {
        $(objBtnFollowPL).addClass("active");
        subscribeArtist('subscribe', artistId);
    }
};

function displayStateDeactive(obj, channelId) {
    $(obj).removeClass("active");
    $("span.iconFladd-" + channelId).css('display', 'inline');
    $("span.vf-iconFladd-" + channelId).css("display", "inline");
    $("span.iconFldone-" + channelId).css('display', 'none');
    $("span.vf-iconFldone-" + channelId).css("display", "none");
    $("span.iconmyaccount-" + channelId).css('display', 'none');
    $("span.vf-iconmyaccount-" + channelId).css("display", "none");
    $(".following-" + channelId).css('display', 'none');
    $(".follow-" + channelId).css('display', 'inline');
};

function displayStateActive(obj, channelId) {
    $(obj).addClass("active");
    $("span.iconFldone-" + channelId).css('display', 'inline');
    $("span.vf-iconFldone-" + channelId).css("display", "inline");
    $("span.iconFladd-" + channelId).css('display', 'none');
    $("span.vf-iconFladd-" + channelId).css("display", "none");
    $("span.iconmyaccount-" + channelId).css('display', 'none');
    $("span.vf-iconmyaccount-" + channelId).css("display", "none");
    $(".following-" + channelId).css('display', 'inline');
    $(".follow-" + channelId).css('display', 'none');
    $('.btnFollow-' + channelId+' .activity').removeClass("activityfl");
    setTimeout(function() {
        $('.btnFollow-' + channelId+' .activity').addClass("activityfl");
    }, 1500);
};

function displayStateOwner(obj, channelId) {
    var followChannelBox = $(obj).parents('div.followChanel'),
        myAccountClass = 'btnmyaccount';
    $(obj).removeClass("active");
    $("span.iconmyaccount-" + channelId).css('display', 'inline');
    $("span.vf-iconmyaccount-" + channelId).css("display", "inline");
    $("span.iconFldone-" + channelId).css('display', 'none');
    $("span.vf-iconFldone-" + channelId).css("display", "none");
    $("span.iconFladd-" + channelId).css('display', 'none');
    $("span.vf-iconFladd-" + channelId).css("display", "none");

    $(".follow-" + channelId).css('display', 'none');
    $(".following-" + channelId).css('display', 'inline');

    if(!followChannelBox.hasClass(myAccountClass)) {
        followChannelBox.addClass(myAccountClass);
    }
};
function doSubscribeChannel(objBtnFollow, channelId, channelName){
    var totalBox = $('.totalFollow-' + channelId);
    if($(objBtnFollow).hasClass('active')) {
        displayStateDeactive(objBtnFollow, channelId);
        $("span.disfollow-" + channelId).css("display", "none");
        $("span.vf-iconFlclear-" + channelId).css("display", "none");
        totalBox.html(parseInt(totalBox[0].innerHTML) - 1);
        subscribeChannel('unsubscribe', channelName);
    } else if ($(objBtnFollow).parents('div.followChanel').hasClass('btnmyaccount')) {
        // do nothing, just display number of people that subscribed this channel
    } else {
        displayStateActive(objBtnFollow, channelId);
        totalBox.html(parseInt(totalBox[0].innerHTML) + 1);
        subscribeChannel('subscribe', channelName);
    }
};
function hoverInSubscribeChannel(channelId){
    if ($("span.following-" + channelId).css("display") == 'inline'){
        $("span.following-" + channelId).css("display", "none");
        $("span.vf-iconFldone-" + channelId).css("display", "none");

        $("span.disfollow-" + channelId).css("display", "inline");
        $("span.vf-iconFlclear-" + channelId).css("display", "inline");
    }
};
function hoverOutSubscribeChannel(channelId){
    if ($("span.disfollow-" + channelId).css("display") == 'inline'){
        $("span.disfollow-" + channelId).css("display", "none");
        $("span.vf-iconFlclear-" + channelId).css("display", "none");

        $("span.following-" + channelId).css("display", "inline");
        $("span.vf-iconFldone-" + channelId).css("display", "inline");
    }
};
var checkAndHide = function(box, target, exception) {
    if(!box.is(target) && box.has(target).length === 0 && (typeof exception === 'undefined' || exception.has(target).length === 0)) {
        box.hide();
    }
};

// Phan: block adding start
var checkAndHideShowMore = function(parentSelector) {
    var videoDesc = $(parentSelector + " .description .video-desc"),
        viewMore = $(parentSelector + " .viewMore"),
        realHeight = videoDesc[0].scrollHeight,
        offsetHeight = videoDesc[0].offsetHeight;
    if(realHeight > offsetHeight){
        viewMore.css("display", "block");
        videoDesc.css("max-height", "110px");
    } else {
        viewMore.css("display", "none");
    }
};

var truncatePlaylistDescBlock = function () {
    $('p.desc-intro').dotdotdot({
        ellipsis: '...',
    });
};


// Phan: block adding end

var loadMoreVideosForChannel = function(classListItems, from, maximum, channel, filter, order, Waypoint) {
    $.ajax({
        url: '/channel/' + channel + '/' + filter + '?loadmore=' + from + "&order=" + order,
        success: function(data) {
            $('.' + classListItems).append(data);
            if(typeof Waypoint !== 'undefined') {
                Waypoint.refreshAll();
            }
            $('#xem-them #container-loading').css("display", "none");
            if ($('.' + classListItems + ' article').length == maximum) {
                $("#xem-them").remove();
            }
        }
    });
};

var loadMoreItemsForChannel = function(itemHolder, url, maximum, Waypoint) {
    $.ajax({
        url: url,
        success: function(data) {
            itemHolder.append(data);
            if(typeof Waypoint !== 'undefined') {
                Waypoint.refreshAll();
            }
            $('#xem-them #container-loading').css("display", "none");
            if(itemHolder.find('article').length == maximum) {
                $("#xem-them").remove();
            }
        }
    });
};
var displayMobileLoginPopup = function() {
  $.fancybox({
      content: $("#forgotLoginbox"),
      closeClick: true,
      openEffect: 'none',
      closeEffect: 'none',
      helpers: {
        overlay: {
          closeClick: true,
        }
      }
    });
}
var loadMoreFollowedPlaylist = function(slider, goToNewSlide){
    var index = $('.vf-following-playlist ul.bxslider li article').length;
    var end = index + 12;
    if(index > 0){
        $.ajax({
            url: '/subcribedplaylist/list?start='+index+'&end=' + end,
            success: function(data){
                if (data != null && data.trim().length > 0){
                    $('.vf-following-playlist ul').append(data);
                    var countResult = $('.vf-following-playlist ul.bxslider li article').length - index;
                    if (countResult < 12){
                        configSlider['infiniteLoop'] = true;
                        configSlider['onSlideNext'] = function(){};
                        slider.reloadSlider(configSlider);
                    }else{
                        slider.reloadSlider();
                    }  
                    slider.goToSlide(goToNewSlide);
                }else{
                    configSlider['onSlideNext'] = function(){};
                    slider.reloadSlider(configSlider);
                    slider.goToSlide(goToNewSlide);
                }
            }
        }); 
    }
}
function formatDateHourMinuteFromMili(milliseconds) {
    var published = new Date(milliseconds);
    var hours = published.getHours();
    if ( hours < 10 ) {
        hours = '0' + hours;
    }
    var minutes = published.getMinutes();
    if ( minutes < 10 ) {
        minutes = '0' + minutes;
    }

    var dd = published.getDate();
    if ( dd < 10 ) {
        dd = '0' + dd;
    }
    var mm = published.getMonth()+1;
    if ( mm < 10 ) {
        mm = '0' + mm;
    }
    var yy = published.getFullYear();
    if ( yy < 10 ) {
        yy = '0' + yy;
    }
    return dd+'/'+mm+'/'+yy + ' ' + hours + ':' + minutes;
}

function reloadInfoVideo(objV) {
    $('#vf_info header .title').text(objV.name);
    document.title = objV.name;
    var build_link = 'background-image: url(' + objV.profile.avatarUrl + '); height: 100%;';
    $('#vf_info_owner_avatar p').attr('style', build_link);
    var domOwnerMeta = $('#vf_info_owner_meta');
    domOwnerMeta.find('.user_name a').html(objV.profile.displayName);
    domOwnerMeta.find('.user_name a').attr("href", "/channel/" + objV.profile.userName);
    var domSubscription = domOwnerMeta.find('.subscription-container');
    domSubscription.find('.total-subscription').html(objV.profile.countSubscriber);
    $('#vf_info_stats p span').html(formatFriendlyCount(objV.viewed));
    var domDesc = $('#vf_info .description');
    var spanPublish = $(document.createElement('span')).html(formatDateFromMili(objV.uploadTs));
    domDesc.find('.published-date').html("Ngày đăng: ");
    domDesc.find('.published-date').append(spanPublish);
    var spanCate = $(document.createElement('span'));
    var hrefCate = $(document.createElement('a'));
    hrefCate.text(objV.parentCate.cateName);
    hrefCate.attr("href", "/" + objV.parentCate.pathName + ".html?utm_source=homepage&utm_medium=giaitributton&utm_campaign=internal");
    spanCate.append(hrefCate);
    domDesc.find('.category').html("Chuyên mục: ");
    domDesc.find('.category').append(spanCate);
    var spanTags = $(document.createElement('span'));
    var hrefTag;
    $.each(objV.tags, function (number, tag) {
        hrefTag = $(document.createElement('a'));
        hrefTag.html(tag);
        hrefTag.attr("href", "/tag/" + tag + ".html#cvf=1");
        spanTags.append(hrefTag);
        if (_.last(objV.tags) != tag) spanTags.append(", ");
    });
    domDesc.find('.tags').html("Thẻ: ");
    domDesc.find('.tags').append(spanTags);

    // set desc
    checkAndHideShowMoreDesc(objV.fulldesc);
}

var checkAndHideShowMoreDesc = function (descfull) {
    var parentSelector = $('#vf_info'),
        videoDesc = parentSelector.find('.description .video-desc'),
        viewMore = parentSelector.find('.viewMore');
    videoDesc.html(descfull);

    if (videoDesc[0] && videoDesc[0].scrollHeight > 110) {
        viewMore.html(" Xem thêm ");
        viewMore.css("display", "block");
        videoDesc.css("max-height", "110px");
    } else {
        viewMore.css("display", "none");
    }
};