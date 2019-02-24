var categoriaModels = require("../models/categoria")

var categoriaController = {};
categoriaController.nuevaCategoria = (req,res) => {
	var nuevaCategoria = new categoriaModels({
		area: req.body.area
	}); 
	nuevaCategoria.save((err,categoria) =>{
		if(err){
			return res.status(400).json({
				status:false,
				message: 'Error al guardar en la base de datos'
			});
		} 
		return res.status(200).json({
				status:true,
				message: 'Guardado'
			})
	})
}


categoriaController.categoriaList = (req, res) => {
	categoriaModels.find({}).sort({_id: -1}).exec((err,categoria) => {
		if (err) {
			return res.status(400).json({
				status:false,
				message:'No encontrado'
			}) 
		}
		else {
				return res.status(200).json({
					status:true,
					message:'Busqueda existosa',
					categoria
				})
			}
	});
}

module.exports = categoriaController;