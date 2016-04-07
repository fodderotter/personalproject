var mongoose = require("mongoose");
var Tasks = new mongoose.Schema({
	title: {type: String, required:true}
	, doc: {type: Date}
	, owner: {type: String}
});

module.exports = mongoose.model("Tasks", Tasks);
