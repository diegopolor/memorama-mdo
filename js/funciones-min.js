


var tiempo =2000;  var timerFinal = 0, timerParejas  = 0; let classUnoNum = 0; let classDosNum = 0; var action =true; function func_memoria(e){if (memoria == 6)timerFinal = setTimeout(function(){$(".retro.msn").hide().find("p").html("");M.toast({html: 'Felicidades! Has finalizado el juego satisfactoriamente.', classes: 'rounded'});},tiempo)}function reiniciar(){action = true; clearTimeout(timerFinal);clearTimeout(timerParejas);$(".crono span").html(30);$(".boton .init").show();$(".boton .reinit").hide();$(".memoria article").css(apagado).find("span").css({display:"none"});const numero = document.querySelectorAll(".num"); console.log(numero); for(let num of numero) num.style.display = "block";     claseDos="";claseUno="";contador=0;memoria=0;parDos="";parUno="";segundero=500;$(document).off("click",".memoria article")}function parejas(){ if (action){$(this).css({background:"#f3f3f3"}).find("span").css({display:"block" });if(parUno===""){parUno=$(this).attr("data-pareja");claseUno=$(this).attr("class");classUnoNum = document.querySelector(`.${claseUno} > h1`); classUnoNum.style.display = "none";}else{parDos=$(this).attr("data-pareja");claseDos=$(this).attr("class");classDosNum = document.querySelector(`.${claseDos} > h1`); classDosNum.style.display = "none"; console.log(classDosNum);if(parUno===parDos){$(".retro.msn").stop().removeClass("incorrecto");M.toast({html: '<i class="space material-icons">check</i>Correcto'});action = true; ++memoria;func_memoria(memoria);claseUno="";claseDos=""}else{$(".retro.msn").stop().addClass("incorrecto");M.toast({html: '<i class="space material-icons">cancel</i>Incorrecto' }); action = false; timerParejas = setTimeout(function(){$("."+claseUno+", ."+claseDos).css({background:"#84A215"}).find("span").css({display:"none"}); classUnoNum.style.display= "block"; classDosNum.style.display= "block";  claseUno="";claseDos="";$(".retro.msn").fadeOut(); action=true},tiempo)}parUno="";parDos=""}}else alert("No se puede realizar esta acción en este momento. Espere a que se den vuelta las cartas. ")} function crono(){$(document).on("click",".memoria article",parejas);$(".memoria article").css(encendido);$(".boton .init").hide();$(".boton .reinit").show();segundero=500;}var claseUno="",claseDos="",memoria=0,parUno="",parDos="",contador=0,segundero=30,encendido={opacity:"1",cursor:"pointer"},apagado={background:"#84A215",opacity:"0.4",cursor:"inherit"};$(document).on("click","#reiniciar",reiniciar);$(document).on("click","#iniciar",crono);

