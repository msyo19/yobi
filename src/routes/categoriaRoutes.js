var router =  require("express").Router();
var categoriaController = require("../controllers/categoriaController");
router.get("/categoriaList",categoriaController.categoriaList);
router.post("/nuevaCategoria",categoriaController.nuevaCategoria);
module.exports = router;