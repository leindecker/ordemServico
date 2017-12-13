// app/routes.js
module.exports = function(app, passport) {

	// HOME PAGE (with login links)
	app.get('/', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') }); // load the index.ejs file
	});

	app.get('/index', function(req, res) {
		res.render('index.ejs', {
        user : req.user
    });
	});

  app.get('/clientes', function(req, res) {
    res.render('clientes.ejs');
  });

  app.get('/sobre', function(req, res) {
    res.render('sobre.ejs');
  });

  app.get('/ordemServico', function(req, res) {
    res.render('ordemServico.ejs');
  });

	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/index', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

  // facebook -------------------------------

      // send to facebook to do the authentication
      app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

      // handle the callback after facebook has authenticated the user
      app.get('/auth/facebook/callback',
          passport.authenticate('facebook', {
              successRedirect : '/index',
              failureRedirect : '/login'
          }));

	// SIGNUP
	// show the signup form
	app.get('/cadastrar', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('cadastrar.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/cadastrar', passport.authenticate('local-signup', {
		successRedirect : '/login', // redirect to the secure profile section
		failureRedirect : '/cadastrar', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// LOGOUT
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

    // route middleware to make sure
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};
