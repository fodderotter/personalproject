var mongoose = require("mongoose");
var Owner = new mongoose.Schema({
	name: {type: String, required: true}
});

module.exports = mongoose.model("Owner", Owner);
