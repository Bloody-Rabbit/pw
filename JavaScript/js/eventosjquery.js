/*jquery = $*/
var inicia = function(){
	var nuevo = function(){
	JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/?results=20',
  dataType: 'json',
  success:function(data) {
    $("#nombre").html(data.results[0].name.first+ " " + 
    				  data.results[0].name.last);
    $("#foto").attr("scr",data.results[0].picture.large);
    $("Localizacion").html(data.results[0].location.street+ " " +
    						data.location.city+" "
    						data.location.state + " "
    						data.location.postcode + " ")
  }
});
	$("#btnNuevo").on("click", nuevo);
   }   

	/*alert("Lista la página");*/
//Iniciamos JQuery, cuando la página está lista, ejecuta la función inica.
$(document).ready(inicia);