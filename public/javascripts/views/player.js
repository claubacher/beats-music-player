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

    this.getAudio();
  },

  getAudio: function() {
    var url = app.beatsBaseUrl + 'tracks/' + app.currentTrack.id + '/' + 'audio?' + 'acquire=1' + '&access_token=' + app.accessToken;

    $.getJSON(url, function(res) {
      this.sound = soundManager.createSound({
        url: res.data.resource,
        serverURL: res.data.location
      });
    }.bind(this));
  },

  togglePlaying: function() {
    if (app.playing) {
      this.sound.pause();
      app.playing = false;
    } else {
      this.sound.play();
      app.playing = true;
    }

    this.$el.find('.play-pause').children().toggleClass('active');
  }
});
