module.exports = {
    'facebookAuth' : {
        'clientID'        : '153805141907907', // your App ID
        'clientSecret'    : '9a5966c3bc35cb2326f272b11d979f5a', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    }
};
