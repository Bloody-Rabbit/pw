// const app=require('electron').app;
// const BrowserWindow=require('electron').BrowserWindow;
const {app, BrowserWindow}= require('electron');
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
//constantes para PDF
const electron = require('electron');
const fs = require('fs'); //sistema de archivos (file system)
const os = require('os'); //Acceso al sistema operativo
const ipc = electron.ipcMain;//para declarar una funcion remota (IPC)
const shell = electron.shell;//Acceso a la terminal o linea de comandos (SHELL)


// ECMASCRIPT = 6.  let=const  permite declarar variables pero cuando reciben un valor se vuelven constantes
let PantallaPrincipal;

//objeto global para compartir datos entre pantallas
global.infoUsuarios = {
	usuario: '',
	usuariovalida: '',
	periodoactual: ''
}
global.infoGrupos = {
	clavemateria: '',
	grupo: ''
}

function muestraPantallaPrincipal(){
	PantallaPrincipal= new BrowserWindow({width:400,height:400});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true 
	}));
	//PantallaPrincipal.webContents.openDevTools();   //Linea para herramientas de desarrollador(consola que muestra errores)
	PantallaPrincipal.show();
}
// evento para PDF (declaración)
ipc.on('print-to-pdf', function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
			win.close()
		})
	})
});

app.on('ready',muestraPantallaPrincipal);

		
