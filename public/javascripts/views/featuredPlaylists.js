var FeaturedPlaylistsView = Backbone.View.extend({
  el: '.featured',

  playlists: [],

  initialize: function(urls) {
    urls.forEach(function(url, urlIdx, urls) {
      $.getJSON(url, function(res) {
        res.data.forEach(function(dataItem, itemIdx, data) {
          var playlist = new Playlist(dataItem);
          this.playlists.push(playlist);
          if (urlIdx === urls.length - 1 && itemIdx === data.length - 1) {
            this.render();
          }
        }, this);
      }.bind(this));
    }, this);
  },

  render: function() {
    this.playlists.forEach(function(playlist) {
      var featuredPlaylistItem = new FeaturedPlaylistItem({ playlist: playlist });
      this.$el.append( featuredPlaylistItem.$el );
    }, this);
  }
});
