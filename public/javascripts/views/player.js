var app = app || {};

var Player = Backbone.View.extend({

  el: '.controls-container',

  events: {
    'click .play-pause': 'togglePlaying',
    'click .skip-backward': 'skipBackward',
    'click .skip-forward': 'skipForward',
    'change .volume': 'changeVolume'
  },

  render: function() {
    $.get(app.beatsBaseUrl + 'tracks/' + app.currentTrack.id + '/artists?client_id=' + app.clientId, function(res) {
      $('.track-name').text(app.currentTrack.name);
      $('.artist-name').text(res.data[0].name);
    });
  },

  playing: false,

  togglePlaying: function() {
  }
});
