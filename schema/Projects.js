var mongoose = require("mongoose");
var Tasks = require('./Tasks.js');

var Schema = mongoose.Schema;

var Projects = new mongoose.Schema({
	title: {type: String, required: true}
	, owner: {type: String, required: true}
	, doc: {type: Date, required: true}
	, desc: {type: String}
	, tasks: [
		{
			type: Schema.Types.ObjectId
			, ref: "Tasks"
		}
	]
})

module.exports = mongoose.model("Projects", Projects);
