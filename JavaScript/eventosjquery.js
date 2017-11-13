/*jquery = $*/
var inicia = function(){
	var nuevo = function(){
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
			  	$("#nombre").html("Nombre: "+data.results[0].name.first+" "+data.results[0].name.last);
			  	$("#genero").html("Genero: "+data.results[0].gender);
			  	$("#foto").attr("src",data.results[0].picture.large);
			  	$("#domicilio").html("Domicilio: "+data.results[0].location.street+", "+
			  		data.results[0].location.city+" "+data.results[0].location.state+", CP:"+data.results[0].location.postcode);
			  	$("#email").html("Email: "+data.results[0].email);
			  	$("#tel").html("Telefono: "+data.results[0].phone);
			  	$("#cell").html("Celular: "+data.results[0].cell);
			}
		});
	}
	//JSON = JavaScript Object Notation
	
	$("#btnNuevo").on("click",nuevo);

}
      
/*alert("Lista la página");*/
//Iniciamos JQuery, cuando la página está lista, ejecuta la función inica.
$(document).ready(inicia);