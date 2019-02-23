var usersModel = require("../models/users")

var usersController = {};
//variable create
//Esta funcion es para almacenar los datos de un usuario
usersController.nuevoUsuario = (req,res) => {
	var nuevoUsuario = new usuario({
		name: req.body.name,
		addres: req.body.addres,
		email: req.body.email,
		password: req.body.password	
	}); 
	nuevoUsuario.save((err,usuario) =>{
		if(err){
			return res.status(400).json({
				status:false,
				message: 'Error al guardar en la base de datos'
			});
		} else {
			return res.status(200).json({
				status:true,
				message: 'Guardado'
			})
		}
	})
}
// Almacenar los datos nuevos del usuario  del usuario que a hora sera trabajador
usersController.nuevoTrabajador = (req,res) => {
	var nuevoTrabajador = new usuario({
		name: req.body.name,
		addres: req.body.addres,
		email: req.body.email,
		password: req.body.password	,
		phone: req.body.phone,
		area: req.body.area,
		status: req.body.status,
		comments: req.body.comments,
		rate: req.body.rate,
		services: req.body.services
	}); 
	nuevoUsuario.save((err,usuario) =>{
		if(err){
			return res.status(400).json({
				status:false,
				message: 'Error al guardar en la base de datos'
			});
		} else {
			return res.status(200).json({
				status:true,
				message: 'Guardado'
			})
		}
	})
}
// ESTA FUNCION ES PARA TRAER LOS DATOS

usersController.userList = (req, res) => {
	usersModel.find({}).sort({_id: - 1}).exec((err,usersList) =>{
		if (err) {
			return res.status(400).json({
				status:false,
				message:'Error no se encontraron los datos'
			}) 
		} else {
			return res.status(200).json({
				status:true,
				message'Existoso se encontraron los datos',
				usersList
			})
		}
	})
}
module.export = usersController;
