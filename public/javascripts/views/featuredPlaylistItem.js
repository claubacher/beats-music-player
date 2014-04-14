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
    app.playlistView.loadPlaylist(this.playlist);
  }
});
