var userModel = require('../models/users'); 

sesionController = {}; 

sesionController.get_identificacion = (req, res) => {
    res.render('controllers', 'src', 'public', 'index.html');
}; 

sesionController.post_identificacion = (req, res) => {
    req.session.name = req.body.name; 
    res.redirect('controllers', 'src', 'public', 'index.html'); 
}

sesionController.bienvenida = (req, res) => {
    if(req.session.name) {
        res.render('controllers', 'src', 'public', 'inicio.html');
    } else {
        res.redirect()
    }
}


module.exports = sesionController;
