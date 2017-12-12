const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery


const btnEntrar = document.getElementById('btnEntrar');
var usuario= document.getElementById('usuario');
var contrasena= document.getElementById('contrasena');

let PantallaGrupos;


btnEntrar.addEventListener('click',function(event){
	require('electron').remote.getGlobal('infoUsuarios').nombre;
	$.ajax({
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario='+$("#usuario").val()+'&clave='+$("#contrasena").val(),
		dataType: 'json',
		success: function(data){
			if(data.respuesta == true){
				console.log("Usuario Valido");
/////////////////Asignamos los tokens usuario, usuariovalida y periodo actual a las variables globales para su futuro uso./////////////////////////////
				require('electron').remote.getGlobal('infoUsuarios').usuario = $("#usuario").val();
				require('electron').remote.getGlobal('infoUsuarios').usuariovalida = data.usuariovalida;
				require('electron').remote.getGlobal('infoUsuarios').periodoactual = data.periodoactual;

				usuarioAceptado();
			}
			else{
				alert("Usuario o contraseña incorrectos");
			}
		}
	})
	
});


function usuarioAceptado(){
	PantallaGrupos= new BrowserWindow({width:800,height:800});
	PantallaGrupos.loadURL(url.format({
		pathname: path.join(__dirname,'pantallaGrupos.html'),
		protocol:'file', 
		slashes:true
	}));
	//PantallaGrupos.webContents.openDevTools();
	PantallaGrupos.show();
}
