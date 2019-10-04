const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50
	},
	description: {
		type: String,
		minlength: 5,
		maxlength: 255,
	},
	date: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 30
	},
	hall: {
		number: {
			type: Number,
			required: true,
		},
		audience: Array
});

const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = Movie;
