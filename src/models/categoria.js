var mongoose = require('mongoose')

var categoriaSchema = new mongoose.Schema(
	{
		area: {
			type: String
		}
	},
	{
		collection: 'Categoria'
	}
);
var Categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = Categoria;