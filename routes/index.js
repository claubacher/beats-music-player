var express = require('express');
var router = express.Router();
var qs = require('querystring');
var baseBeatsUri = 'https://partner.api.beatsmusic.com/v1/oauth2/'

router.get('/', function(req, res) {
  var authUrl = baseBeatsUri + 'authorize?' + qs.stringify({
    response_type: 'token',
    redirect_uri: req.protocol + '://' + req.get('host') + '/play',
    client_id: process.env.BEATS_KEY
  });

  res.render('index', { title: 'Log in', authUrl: authUrl });
});

router.get('/play', function(req, res) {
  var accessToken = req.query.access_token;
  res.render('player', { title: 'Beats Music Player', accessToken: accessToken });
});

module.exports = router;
