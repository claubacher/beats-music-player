$(function() {
  soundManager.setup({
    url: '/vendor/SM2/swf/',
    flashVersion: 9,
    preferFlash: true,
    onready: function() {
      var url = 'https://partner.api.beatsmusic.com/v1/api/tracks/' + 
          'tr51760477/' +
          'audio?' +
          'acquire=1' +
          '&access_token=' + accessToken;

      $.getJSON(url, function(res) {
        soundManager.createSound({
          url: res.data.resource,
          serverURL: res.data.location,
        }).play();
      });
    }
  });
});
