var app = app || {};

var PlaylistView = Backbone.View.extend({
  el: '.playlist',

  render: function() {
    this.$el.empty();

    $('.playlist-name').text(app.currentPlaylist.name);

    app.currentPlaylist.tracks.forEach(function(track) {
      this.$el.append( $('<li>').text(track.name) );
    }, this);
  }
});
