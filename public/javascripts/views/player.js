var app = app || {};

var Player = Backbone.View.extend({

  el: '.player-container',

  events: {
    'click .play-pause': 'playPause',
    'click .skip-backward': 'skipBackward',
    'click .skip-forward': 'skipForward',
    'change .volume': 'changeVolume'
  },

  initialize: function(defaultTrack) {
    app.currentTrack = defaultTrack;
    this.render();
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

    var onfinish = this.skipForward.bind(this);

    $.getJSON(url, function(res) {
      this.sound = soundManager.createSound({
        url: res.data.resource,
        serverURL: res.data.location,
        volume: 50,
        onfinish: onfinish
      });

      if (app.volume) this.sound.setVolume(app.volume);
      if (app.playing) this.sound.play();
    }.bind(this));
  },

  togglePlaying: function() {
    app.playing = !app.playing;
    this.$el.find('.play-pause').children().toggleClass('active');
  },

  playPause: function() {
    if (app.playing) {
      this.sound.pause();
    } else {
      this.sound.play();
    }

    this.togglePlaying();
  },

  stop: function() {
    this.sound.stop();
    this.togglePlaying();
  },

  skipBackward: function() {
    var currentIdx = app.currentPlaylist.tracks.indexOf(app.currentTrack);
    if (currentIdx > 0) {
      this.sound.destruct();
      app.currentTrack = app.currentPlaylist.tracks[currentIdx - 1];
      this.render();
      app.playlistView.render();
    } else {
      this.stop();
    }
  },

  skipForward: function() {
    var currentIdx = app.currentPlaylist.tracks.indexOf(app.currentTrack);
    if (currentIdx < app.currentPlaylist.tracks.length - 1) {
      this.sound.destruct();
      app.currentTrack = app.currentPlaylist.tracks[currentIdx + 1];
      this.render();
      app.playlistView.render();
    } else {
      this.stop();
    }
  },

  changeVolume: function(e) {
    var newVolume = Number(e.target.value);
    if (this.sound) {
      this.sound.setVolume(newVolume);
    }
    app.volume = newVolume;
  },

  playTrack: function(idx) {
    this.sound.destruct();
    app.currentTrack = app.currentPlaylist.tracks[idx];
    if (!app.playing) this.togglePlaying();
    this.render();
  }
});
