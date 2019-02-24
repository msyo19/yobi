//'../yobi/api/usersList'
var datos;
function obtenerDatos(url) {
	
    axios.get(url)
    .then((response) => {datos = response; console.log(datos["data"]["usersList"]) })
    .catch((error) => { datos =  error ;console.log(datos["data"]["usersList"])})
    .then(() => { })
}


function mandarDatos(url,dato) {
    axios.post(url,dato)
    .then((response) => {datos = response; })
    .catch((error) => { datos =  error ;})
    .then(() => { })
}

function actualizarDatos(url,dato) {
    axios.put(url,dato)
    .then((response) => {datos = response;})
    .catch((error) => { datos =  error ;})
    .then(() => { })
}
