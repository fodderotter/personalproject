var mongoose = require("mongoose");
var Tasks = new mongoose.Schema({
	title: String
	, doc: Date
	, owner: String
});

module.exports = mongoose.model("Tasks", Tasks);
