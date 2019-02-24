var router =  require("express").Router();
var userController = require("../controllers/userController");
router.post("/nuevoUsuario",userController.nuevoUsuario);
router.put("/nuevoTrabajador",userController.nuevoTrabajador);
router.get("/listaUsuarios",userController.userList);
module.exports = router;