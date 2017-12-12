const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página*/
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery

const usuario = require('electron').remote.getGlobal('infoUsuarios').usuario;
const usuariovalida = require('electron').remote.getGlobal('infoUsuarios').usuariovalida;
const periodoactual = require('electron').remote.getGlobal('infoUsuarios').periodoactual;

let PantallaAlumnos;

var grupos = new Array();

function datos(clavemateria,grupo,materia,horalunes,horamartes,horamiercoles,horajueves,horaviernes){
	this.clavemateria = clavemateria;
	this.grupo = grupo;
	this.materia= materia;
	this.horalunes=horalunes;
	this.horamartes=horamartes;
	this.horamiercoles=horamiercoles;
	this.horajueves=horajueves;
	this.horaviernes=horaviernes;
}

function mostrarGrupos(){
	$.ajax({
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/obtienegrupos2.php?usuario='+usuario+'&usuariovalida='+usuariovalida+'&periodoactual='+periodoactual,
		dataType: 'json',
		success: function(data){
			if(data.respuesta == true){
				console.log("grupos cargados");
				var numGrupos=data.grupos[0].cantidad;
				//console.log(numGrupos);
				var clavemateria="";
				var grupo="";
				var materia="";
				var horalunes="";
				var horamartes="";
				var horamiercoles="";
				var horajueves="";
				var horaviernes="";
				var resultado="";
				for (var i = 1; i <= numGrupos; i++) {
					clavemateria = data.grupos[i].clavemateria;
					grupo =data.grupos[i].grupo;
					materia =data.grupos[i].materia;
					horalunes =data.grupos[i].horalunes;
					horamartes =data.grupos[i].horamartes;
					horamiercoles =data.grupos[i].horamiercoles;
					horajueves =data.grupos[i].horajueves;
					horaviernes =data.grupos[i].horaviernes;
					//AQUI DEBE COLOCARSE EL HTML QUE GENERE EL GRUPO 
					resultado = "<tr><td>"+clavemateria+"</td><td>"+materia+"</td><td><button id='"+(i-1)+"'>Mostrar Lista</button></td></tr>";
					//console.log(resultado);
					$("#lstMaterias").append(resultado);
					grupos[(i-1)] = new datos(clavemateria,grupo,materia,horalunes,horamartes,horamiercoles,horajueves,horaviernes);
					
				}
			}
			else{
				console.log("grupos no cargados");
			}
		}
	});
}

function btnLista(){

	require('electron').remote.getGlobal('infoGrupos').clavemateria= grupos[this.id].clavemateria; 
	console.log(require('electron').remote.getGlobal('infoGrupos').clavemateria);
	require('electron').remote.getGlobal('infoGrupos').grupo= grupos[this.id].grupo;
	console.log(require('electron').remote.getGlobal('infoGrupos').grupo);

	PantallaAlumnos= new BrowserWindow({width:800,height:800});
	PantallaAlumnos.loadURL(url.format({
		pathname: path.join(__dirname,'pantallaAlumnos.html'),
		protocol:'file', 
		slashes:true
	}));
	//PantallaAlumnos.webContents.openDevTools();
	PantallaAlumnos.show();
}
$("body").on("click","td > button", btnLista);

mostrarGrupos();
