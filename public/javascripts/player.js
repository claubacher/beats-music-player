var app = {
  beatsBaseUrl: 'https://partner.api.beatsmusic.com/v1/api/',
  clientId: 'rwrwapvr4jng2jvp6aeem5wa'
};

$(function() {
  soundManager.setup({
    url: '/vendor/SM2/swf/',
    flashVersion: 9,
    preferFlash: true
  });

    // , featured = [];

  // var getFeatured = function(res) {
  //   var $list = $('.featured');

  //   res.data.forEach(function(item) {
  //     featured.push(item);

  //     var $li = $('<li>');
  //     var $img = $('<img>').attr('src', beatsBaseUrl + item.content.type + 's/' + item.content.id + '/images/default?size=small&client_id=' + clientId); 

  //     $list.append( $li.append($img) );
  //   });
  // }
  var featuredUrl = app.beatsBaseUrl + 'discoveries/featured?client_id=' + app.clientId;
  var editorPicksUrl = app.beatsBaseUrl + 'discoveries/editor_picks?client_id=' + app.clientId;

  var featuredPlaylists = new FeaturedPlaylists([ featuredUrl, editorPicksUrl ]);

  // $.getJSON(, function(res) {
    // res.data.forEach(function(data) {
      // var playlist = new Playlist(data);
      
  //   getFeatured(res);

  //   var defaultPlaylist = featured[0].content;

  //   var name = defaultPlaylist.name ? defaultPlaylist.name : defaultPlaylist.title; 

  //   $('.playlist-name').text(name);

  //   defaultPlaylist.refs.tracks.forEach(function(track) {
  //     $('.playlist').append($('<li>' + track.display + '</li>'));
  //   });

  //   var defaultTrack = defaultPlaylist.refs.tracks[0];

  //   var url = beatsBaseUrl + 'tracks/' + 
  //     defaultTrack.id + '/' +
  //     'audio?' +
  //     'acquire=1' +
  //     '&access_token=' + accessToken;

  //   $('.track-name').text(defaultTrack.display)

  //   $.get(beatsBaseUrl + 'tracks/' + defaultTrack.id + '/artists?client_id=' + clientId, function(res) {
  //     $('.artist-name').text(res.data[0].name);
  //   });

  //   soundManager.onready(function() {
  //     var playing = false;

  //     $.getJSON(url, function(res) {
  //       var sound = soundManager.createSound({
  //         url: res.data.resource,
  //         serverURL: res.data.location
  //       });

  //       $('.play-pause').on('click', function() {
  //         if (playing) {
  //           sound.pause();
  //           playing = false;
  //         } else {
  //           sound.play();
  //           playing = true;
  //         }

  //         $(this).children().toggleClass('active');
  //       });
  //     });
  //   });
  // });

  // $.getJSON(, getFeatured);
});
