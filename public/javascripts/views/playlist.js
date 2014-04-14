var app = app || {};

var PlaylistView = Backbone.View.extend({
  el: '.playlist',

  events: {
    'click li': 'playTrack'
  },

  render: function() {
    this.$el.empty();

    $('.playlist-name').text(app.currentPlaylist.name);

    app.currentPlaylist.tracks.forEach(function(track, idx) {
      this.$el.append( $('<li>').text(track.name).data('index', idx) );
    }, this);
  },

  playTrack: function(e) {
    var idx = $(e.target).data('index');
    app.player.playTrack(idx);
  }
});
