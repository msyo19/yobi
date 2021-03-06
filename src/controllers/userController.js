var usersModel = require("../models/users")

var usersController = {};
//variable create
//Esta funcion es para almacenar los datos de un usuario
/** @Create Add new user --> CREATE */
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
			});
	});
}

// ESTA FUNCION ES PARA TRAER LOS DATOS
/** @Read Get all data --> READ */
usersController.userList = (req, res) => {
	usersModel.find({}).sort({ _id: - 1 }).exec((err, usersList) => {
		if (err) {
			return res.status(400).json({
				status: false,
				message: 'Error no se encontraron los datos'
			});
		} else {
			return res.status(200).json({
				status: true,
				message: 'Existoso se encontraron los datos',
				usersList
			});
		}
	});
}

// ESTA FUNCION ES PARA TRAER LOS DATOS
/** @Read Get all data by ID--> READ */
usersController.getUser = (req, res) => {
	usersModel.findById(req.paams.id).exec((err, Users) => {
		if (err) {
			return res.status(400).json({
				status: false, 
				message: 'Error al encontrar usuario',
				err
			});
		} else {
			return res.status(200).json({
				status: true, 
				message: 'Exito al encontrar usuario',
				Users
			});
		} 

	});
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

usersController.filterPhone = (req, res) => {
	usersModel.findOne({'phone.id' : id}, (err, searchUser) => {
		if (err) {
			return res.status(400).json({
				status:false,
				message:'No encontrado'
			}); 
		}
		else {
				return res.status(200).json({
					status:true,
					message:'Busqueda existosa',
					searchUser
				});
			}
	});
}

usersController.deleteSession = (req, res) => {
	var id = req.params._id;
	usersModel.remove({_id: id}, (err) => {
		if (err) {
			res.status(400).json({
				status: false, 
				message: "Error"
			});
		} else {
			res.status(200).json({
				status: true, 
				message: "Exito"
			});
		}
	});
}
module.exports = usersController;

 