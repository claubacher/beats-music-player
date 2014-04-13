var Track = Backbone.Model.extend({
  initialize: function(track) {
    this.id = track.id;
    this.name = track.display;
  }
});
