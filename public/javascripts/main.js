$(function() {
  soundManager.setup({
    url: '/vendor/SM2/swf/',
    flashVersion: 9,
    preferFlash: true
  });

  soundManager.onready(function() {
    var featuredUrl = app.beatsBaseUrl + 'discoveries/featured?client_id=' + app.clientId;
    var editorPicksUrl = app.beatsBaseUrl + 'discoveries/editor_picks?client_id=' + app.clientId;

    app.featuredPlaylistsView = new FeaturedPlaylistsView([ featuredUrl, editorPicksUrl ]);
    app.playlistView = new PlaylistView();
    app.player = new Player();
  });
});
