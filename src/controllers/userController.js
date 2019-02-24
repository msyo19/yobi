var usersModel = require("../models/users")

var usersController = {};
//variable create
//Esta funcion es para almacenar los datos de un usuario
usersController.nuevoUsuario = (req,res) => {
	var nuevoUsuario = new usersModel({
		name: req.body.name,
		address: req.body.address,
		email: req.body.email,
		password: req.body.password,
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
		} 
		return res.status(200).json({
				status:true,
				message: 'Guardado'
			})
	})
}
// Almacenar los datos nuevos del usuario  del usuario que a hora sera trabajador
/** @Update project by ID --> UPDATE */
usersController.nuevoTrabajador = (req, res) => {
  const datosTrabajador = {
  		name: req.body.name,
		address: req.body.address,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone,
		area: req.body.area,
		status: req.body.status,
		comments: req.body.comments,
		rate: req.body.rate,
		services: req.body.services
  };
  usersModel.updateOne({ _id: req.body._id }, datosTrabajador, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Couldn´t update this project'
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully update this project'
    });
  });
};

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
				message:'Existoso se encontraron los datos',
				usersList
			})
		}
	})
}

usersController.search = (req, res) => {
	usersModel.findOne({name: 'name'}, (err, searchUser) => {
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
					searchUser
				})
			}
	});
}

module.exports = usersController;

