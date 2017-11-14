// Variable global
var operador="";
//////Se puede usar en cualquier funcion////////
function numeros(numero){
	if(operador == ""){ //Escribe en operando1
		var valorInicial=document.calculadora.operando1.value;
		if(valorInicial=="0"){
			document.calculadora.operando1.value="";
		}
		//concatena los valores de numero con los del operando1
		document.calculadora.operando1.value=document.calculadora.operando1.value+numero;
	}else{ //operando2
		var valorInicial=document.calculadora.operando2.value;
		if(valorInicial=="0"){
			document.calculadora.operando2.value="";
		}
		//concatena los valores de numero con los del operando1
		document.calculadora.operando2.value=document.calculadora.operando2.value+numero;
	}
}

var operadores=function(ope){
	operador=ope;
}

var borrar=function(){
	
}

var igual=function(){

}