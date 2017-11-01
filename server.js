var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var routes = require('./routes.js');
var localPassport = require('./config/local-passport');
var user = require('./models/usuarios.js');
var clienteModel = require('./models/clientes.js');
var ordemServicoModel = require('./models/ordemServico.js');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

localPassport(passport);

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	//app.use(express.bodyParser()); // get information from html forms
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(__dirname + '/'));

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// WEB API USUARIOS
app.get('/api/user', function(req, res){
	user.find(function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	});
});

// WEB API CLIENTES
app.get('/api/clientes/:id', function(req, res){
	clienteModel.findOne({_id:req.params.id}, function(err, clientes){
		if(err)
			res.send(err);
		res.json(clientes);
	});
});

app.get('/api/clientes', function(req, res){
	clienteModel.find(function(err, clientes){
		if(err)
			res.send(err);
		res.json(clientes);
	});
});

app.post('/api/clientes', function(req, res){
	clienteModel.create( req.body, function(err, clientes){
		if(err)
			res.send(err);
		res.json(clientes);
	});
});

app.put('/api/clientes/:id', function(req, res){
	var query = {
		nome:req.body.nome,
		email:req.body.email,
		endereco:req.body.endereco,
		contato:req.body.contato,
		automovel:req.body.automovel
	};
	clienteModel.findOneAndUpdate({_id:req.params.id}, query, function(err, cliente){
		if(err)
			res.send(err);
		res.json(cliente);
	});
});

app.delete('/api/clientes/:id', function(req, res){
    clienteModel.findOneAndRemove({_id:req.params.id}, function(err, cliente){
      if(err)
        res.send(err);
      res.json(cliente);
    });
});

//WEB API ORDEM SERVICO
app.get('/api/ordem', function(req, res){
	ordemServicoModel.find(function(err, os){
		if(err)
			res.send(err);
		res.json(os);
	});
});

app.post('/api/ordem/', function(req, res){
	ordemServicoModel.create( req.body, function(err, os){
		if(err)
			res.send(err);
		res.json(os);
	});
});

app.get('/api/ordem/:id', function(req, res){
	ordemServicoModel.findOne({_id:req.params.id}, function(err, os){
		if(err)
			res.send(err);
		res.json(os);
	});
});

app.delete('/api/ordem/:id', function(req, res){
    ordemServicoModel.findOneAndRemove({_id:req.params.id}, function(err, os){
      if(err)
        res.send(err);
      res.json(os);
    });
});

app.put('/api/ordem/:id', function(req, res){
	var query = {
		nome:req.body.nome,
		email:req.body.email,
		endereco:req.body.endereco,
		contato:req.body.contato,
		automovel:req.body.automovel,
    servico: req.body.servico,
    dataEntrega: req.body.dataEntrega,
    dataRetirada: req.body.dataRetirada,
    pagamento: req.body.pagamento,
    total: req.body.total
	};
	ordemServicoModel.findOneAndUpdate({_id:req.params.id}, query, function(err, os){
		if(err)
			res.send(err);
		res.json(os);
	});
});

// routes
routes(app, passport); // load our routes and pass in our app and fully configured passport

// launch
app.listen(port);
console.log('The magic happens on port ' + port);
