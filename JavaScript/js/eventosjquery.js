/*jquery = $*/
var inicia = funtion(){
	JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
      
	/*alert("Lista la página");*/
//Iniciamos JQuery, cuando la página está lista, ejecuta la función inica.
$(document).ready(inicia);