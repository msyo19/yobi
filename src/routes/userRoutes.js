var router =  require("express").Router();
var userController = require("../controllers/userController");
router.post("/nuevoUsuario",userController.nuevoUsuario);
router.get("/listaUsuarios",userController.userList);
router.get('/user/:id', userController.getUser);
router.put("/nuevoTrabajador", userController.nuevoTrabajador);
router.get('/filterPhone', userController.filterPhone);
module.exports = router;