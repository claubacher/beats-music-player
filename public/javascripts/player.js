soundManager.setup({
  url: 'vendor/SM2/swf',
  flashVersion: 9,
  preferFlash: false,
  onready: function() {
    console.log(accessToken);
  }
});
