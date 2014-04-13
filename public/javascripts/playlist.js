var app = app || {};

var Playlist = Backbone.Collection.extend({
  model: Track,

  initialize: function(data) {
    this.imgUrl = app.beatsBaseUrl + data.content.type + 's/' + data.content.id + '/images/default?size=small&client_id=' + app.clientId;
  }
});
