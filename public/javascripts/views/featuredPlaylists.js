var FeaturedPlaylists = Backbone.View.extend({
  el: '.featured',

  playlists: [],

  initialize: function(urls) {
    urls.forEach(function(url, urlIdx, urls) {
      $.getJSON(url, function(res) {
        res.data.forEach(function(item, itemIdx, data) {
          this.playlists.push( new Playlist(item) );
          if (urlIdx === urls.length - 1 && itemIdx === data.length - 1) {
            this.render();
          }
        }, this);
      }.bind(this));
    }, this);
  },

  render: function() {
    this.playlists.forEach(function(playlist) {
      var featuredPlaylistItem = new FeaturedPlaylistItem(playlist);
      this.$el.append( featuredPlaylistItem.$el );
    }, this);
  }
});
