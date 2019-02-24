//'../yobi/api/usersList'


function obtenerDatos(url) {
    axios.get(url)
    .then((response) => { return response})
    .catch((error) => { return error })
    .then(() => {  })
}


function manadarDatos(url,datos ) {
    axios.get(url,datos)
    .then((response) => { return rsponse})
    .catch((error) => { return error})
    .then(() => { })
}
