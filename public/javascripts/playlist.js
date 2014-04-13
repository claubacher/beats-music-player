var app = app || {};

var Playlist = Backbone.Model.extend({
  initialize: function(data) {
    this.imgUrl = app.beatsBaseUrl + data.content.type + 's/' + data.content.id + '/images/default?size=small&client_id=' + app.clientId;
    this.name = data.content.name ? data.content.name : data.content.title;
    this.tracks = data.content.refs.tracks.map(function(track) {
      return new Track(track);
    });
  }
});
