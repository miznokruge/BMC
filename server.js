/*
Module dependencies.
*/

var express = require("express");
var http = require("http");
var path = require("path");
var fs = require('fs');
var app = express();
var MongoStore = require('connect-mongo')(express)

// Models
require('./models/config');

// Controllers
var Api = require('./controllers/api.js')


// Middlewares
app.set("port", process.env.PORT || 3000);
app.set("views", path.resolve(__dirname + "/app/"));
app.set("view_engine", "html").engine("html", function(path, options, fn) {
  if ("function" === typeof options) {
    fn = options;
    options = {};
  }
  return fs.readFile(path, "utf8", fn);
});
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret: 'secret',
    store: new MongoStore({
    	url: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/Shopsy'
    })
  }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express["static"](path.join(__dirname, "/app/")));

// Environment
if ("development" === app.get("env")) {
  app.use(express.errorHandler());
}

// Initialize app

app.get('/',function(req,res){
  res.render('index.html')
})

// Rest apis

app.get('/api/projects/:id',Api.project.get)
app.get('/api/projects',Api.project.getAll)
app.post('/api/projects',Api.project.create)
app.put('/api/projects/:id',Api.project.edit)
app.del('/api/projects/:id',Api.project.delete)

app.post('/api/iterations/:id',Api.canvas.create)
app.put('/api/iterations/:id/:index',Api.canvas.edit)
app.put('/api/canvas/:id/:index',Api.canvas.update)
app.del('/api/iterations/:id/:index',Api.canvas.delete)


http.createServer(app).listen(app.get("port"), function() {
  return console.log("Express server listening on port " + app.get("port"));
});
