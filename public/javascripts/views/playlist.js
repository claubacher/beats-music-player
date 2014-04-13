var PlaylistView = Backbone.View.extend({
  el: '.playlist',

  render: function() {
    $('.playlist-name').text(this.playlist.name);

    this.$el.empty();

    this.playlist.tracks.forEach(function(track) {
      this.$el.append( $('<li>').text(track.name) );
    }, this);
  },

  loadPlaylist: function(playlist) {
    this.playlist = playlist;
    this.render();
  }
});
