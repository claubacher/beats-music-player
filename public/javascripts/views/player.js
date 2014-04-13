var Player = Backbone.View.extend({

  el: '.controls-container',

  events: {
    'click .play-pause': 'togglePlaying',
    'click .skip-backward': 'skipBackward',
    'click .skip-forward': 'skipForward',
    'change .volume': 'changeVolume'
  },

  playlist: [],

  playing: false,

  togglePlaying: function() {
  }
});
