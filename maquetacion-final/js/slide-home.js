/*=============================================
INICIA SLIDE           
=============================================*/

var numeroSlide = 1;
var formatearLoop = false;
var cantidadImg = $("#slide ul li").length;

$("#slide ul").css({"width":(cantidadImg*100) + "%"});
$("#slide ul li").css({"width":(100/cantidadImg) + "%"});


/* INDICATOR */

$("#indicator li").click(function(){

	var roleSlide = $(this).attr("role-slide");

	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ roleSlide +")").fadeIn();

	$(this).css({"opacity":"1"});

	formatearLoop = true;

	numeroSlide = roleSlide;

});


/* FUNCIÓN AVANZAR */

function avanzar(){

	if(numeroSlide >= cantidadImg){

		numeroSlide = 1;
	}

	else{

	numeroSlide++;

	}

	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

}

/* RIGHT */

$("#right").click(function(){

	avanzar();

	formatearLoop = true;

});


/* LEFT */

$("#left").click(function(){

	if(numeroSlide <= 1){

		numeroSlide = cantidadImg;
	}

	else{

	numeroSlide--;

	}

	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();


	formatearLoop = true;

});

/* LOOP */

setInterval(function(){

	if(formatearLoop){

		formatearLoop = false;
	}

	else{

	avanzar();

	}

},5000);


/*=====  FINALIZA EL SLIDE ======*/
