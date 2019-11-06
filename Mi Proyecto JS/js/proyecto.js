var objPersona = [
	{
		username: "admin",
		password: "1234"
	},
	{
		username: "JoseP92",
		password: "piñez"
	},
	{
		username: "prada44",
		password: "foro1234"
	},
    {
        username: "Abel1",
		password: "1234"
    }

]
function validar() {
	let username = document.getElementById('username').value
	let password = document.getElementById('password').value

	for(let i = 0; i < objPersona.length; i++) {
		// Chequeamos el usuario y la contraseña en el objPersona que es una array
		if(username == objPersona[i].username && password == objPersona[i].password) {
			window.location="index.html";
      alert("Login Correcto")
      return
  		}
  	}
  	alert("Login Incorrecto, Introduce el usuario y contraseña correcta")

}