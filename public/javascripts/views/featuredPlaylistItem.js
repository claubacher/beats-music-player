var app = app || {};

var FeaturedPlaylistItem = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click img': 'loadPlaylist'
  },

  initialize: function(playlist) {
    // console.dir(playlist);
    this.playlist = playlist;
    this.render();
  },

  render: function() {
    this.$el.append( $('<img>').attr({ src: this.playlist.imgUrl }) );
  },

  loadPlaylist: function() {
    // console.dir(this.playlist);
    app.loadPlaylist(this.playlist);
  }
});
