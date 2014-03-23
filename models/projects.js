var mongoose = require('mongoose')

var projectSchema = mongoose.Schema({
	title:String,
	canvas:[
			{
				title:String,
				params:{
					segments:String,
					value:String,
					channels:String,
					resources:String,
					cost:String,
					revenue:String,
					activities:String,
					partners:String,
					relationships:String
				},
				feedback:String,
				start_date:Date,
				end_date:Date,
				created_on:Date
			}
		],
	created_on:Date
})

var Project = mongoose.model('projects',projectSchema)

exports.createProject = function(d,callback){
	new Project({
		title:d.title,
		created_on:new Date()
	}).save(function(err,docs){
		e?callback(400):callback(true)
	})
}

exports.editProject = function(id,title,callback){
	Project.update({_id:id},{title:title},function(err,status){
		e?callback(400):callback(true)
	})
}

exports.deleteProject = function(id,callback){
	Project.remove({_id:id},function(e){
		e?callback(400):callback(true)
	})
}

exports.addIteration = function(id,d,callback){
	Project.finOne({_id:id},function(err,docs){
		if(err) callback(400)
		else{docs.canvas.push(d)
			docs.save(function(e,o){
				e?callback(400):callback(o)
			})

		}
	})
}

exports.editIteration = function(id,index,d,callback){
	Project.findOne({_id:id},function(err,docs){
		if(err) callback(400)
		else{
			docs.canvas[index] = d
			docs.save(function(e,o){
				e?callback(400):callback(o)
			})
		}
	})
}

exports.deleteIteration = function(id,index,callback){
	Project.findOne({_id:id},function(err,docs){
		if(err) callback(400)
		else{
			docs.canvas.splice(index,1)
			docs.save(function(e,o){
				e?callback(400):callback(o)
			})
		}
	})
}