var app = app || {};

var PlaylistView = Backbone.View.extend({
  el: '.playlist',

  events: {
    'click li': 'playTrack'
  },

  initialize: function(defaultPlaylist) {
    app.currentPlaylist = defaultPlaylist;
    this.render();
  },

  render: function() {
    this.$el.empty();

    // hack to force redraw on Chrome/MacOSX
    // http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes?lq=1
    this.el.style.display = 'none';
    this.el.offsetHeight;
    this.el.style.display = 'block';

    $('.playlist-name').text(app.currentPlaylist.name);

    app.currentPlaylist.tracks.forEach(function(track, idx) {
      this.$el.append( $('<li>').text(track.name).data('index', idx) );
    }, this);
  },

  playTrack: function(e) {
    var idx = $(e.target).data('index');
    app.player.playTrack(idx);
  },

  loadPlaylist: function(playlist) {
    app.currentPlaylist = playlist;
    this.render();
  }
});
