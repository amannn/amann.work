const functions = require('firebase-functions');
const acceptLanguage = require('accept-language');

acceptLanguage.languages(['de-DE', 'en-GB']);

/**
 * Redirects from `/` to `/de` or `/en` based on the language preference of the user.
 */
exports.redirectRoot = functions.https.onRequest((req, res) => {
  const userLanguage = req.headers['accept-language'];
  const matchingLanguage = acceptLanguage.get(userLanguage);

  const url = matchingLanguage === 'de-DE' ? '/de/' : '/en/';
  res.redirect(url);
});
