var app = app || {};

var FeaturedPlaylistItem = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click img': 'loadPlaylist'
  },

  initialize: function(attrs) {
    this.playlist = attrs.playlist;
    this.render();
  },

  render: function() {
    this.$el.append( $('<img>').attr({ src: this.playlist.imgUrl }) );
  },

  loadPlaylist: function() {
    app.currentPlaylist = this.playlist;
    app.currentTrack = this.playlist.tracks[0];
    app.playlistView.render();
    if (!app.playing) {
      app.player.render();
    }
  }
});
