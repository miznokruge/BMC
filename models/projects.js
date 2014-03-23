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
		e?callback(null):callback(true)
	})
}

exports.editProject = function(id,title,callback){
	Project.update({_id:id},{title:title},function(err,status){
		e?callback(null):callback(true)
	})
}

exports.deleteProject = function(id,callback){
	Project.remove({_id:id},function(e){
		e?callback(null):callback(true)
	})
}

exports.get = function(id,callback){
	Project.findOne({_id:id},function(err,docs){
		err?callback(null):callback(docs)
	})
}

exports.getAll = function(callback){
	Project.find({},function(err,docs){
		err?callback(null):callback(docs)
	})
}
exports.createCanvas = function(id,d,callback){
	Project.finOne({_id:id},function(err,docs){
		if(err) callback(null)
		else{docs.canvas.push(d)
			docs.save(function(e,o){
				e?callback(null):callback(o)
			})

		}
	})
}

exports.editCanvas = function(id,index,d,callback){
	Project.findOne({_id:id},function(err,docs){
		if(err) callback(null)
		else{
			docs.canvas[index] = d
			docs.save(function(e,o){
				e?callback(null):callback(o)
			})
		}
	})
}

exports.deleteCanvas = function(id,index,callback){
	Project.findOne({_id:id},function(err,docs){
		if(err) callback(null)
		else{
			docs.canvas.splice(index,1)
			docs.save(function(e,o){
				e?callback(null):callback(o)
			})
		}
	})
}