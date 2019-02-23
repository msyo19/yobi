axios.post('/test')
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })
.then(() => { console.log("Fin"); })