const router = require('express').Router();
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const spotify = require('../controllers/spotify');
const secureRoute = require('../lib/secureRoute');

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute,users.delete)
  .put(users.update);

router.route('/spotify')
  .post(oauth.spotify)
  .get(spotify.playlist);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.post('/spotify', oauth.spotify);
//------------------------------------------------------------------------------

module.exports = router;
