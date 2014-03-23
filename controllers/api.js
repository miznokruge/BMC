var Project = require('../models/projects')


var project = {
	create:function(req,res){
		Project.createProject(req.body,function(done){
			res.send(done)
		})
	},
	edit:function(req,res){
		Project.editProject(req.params.id,req.body,function(done){
			res.send(done)
		})
	},
	delete:function(req,res){
		Project.deleteProject(req.params.id, function(done){
			res.send(done)
		})
	},
	get:function(req,res){
		Project.get(req.params.id, function(done){
			res.send(done)
		})
	},
	getAll:function(req,res){
		Project.getAll(function(done){
			res.send(done)
		})
	}
}

var canvas = {
	create:function(req,res){
		Project.createCanvas(req.params.id, req.body, function(done){
			res.send(done)
		})
	},
	edit:function(req,res){
		Project.editCanvas(req.params.id,req.params.index,req.body, function(done){
			res.send(done)
		})
	},
	update:function(req,res){
		Project.updateCanvas(req.params.id, req.params.index, req.body, function(done){
			res.send(done)
		})
	},
	delete:function(req,res){
		Project.deleteCanvas(req.params.id, req.params.index, function(done){
			res.send(done)
		})
	}
}


module.exports = {
	project:project,
	canvas:canvas
}