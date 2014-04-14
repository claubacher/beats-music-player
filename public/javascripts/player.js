$(function() {
  soundManager.setup({
    url: '/vendor/SM2/swf/',
    flashVersion: 9,
    preferFlash: true
  });

  soundManager.onready(function() {
    var featuredUrl = app.beatsBaseUrl + 'discoveries/featured?client_id=' + app.clientId;
    var editorPicksUrl = app.beatsBaseUrl + 'discoveries/editor_picks?client_id=' + app.clientId;

    var featuredPlaylistsView = new FeaturedPlaylistsView([ featuredUrl, editorPicksUrl ]);
    var playlistView = new PlaylistView();
    var player = new Player();

    app.loadPlaylist = function(playlist) {
      app.currentPlaylist = playlist;
      app.currentTrack = playlist.tracks[0];
      playlistView.render();
      if (!app.playing) {
        player.render();
      }
    };
  });
});
