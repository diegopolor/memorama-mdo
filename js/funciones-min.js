

var action =  true;function func_memoria(e){e==6&&setTimeout(function(){$(".retro.msn").hide().find("p").html("");M.toast({html: 'Felicidades! Has finalizado el juego satisfactoriamente.', classes: 'rounded'});},1500)}function reiniciar(){clearInterval(contador);$(".crono span").html(30);$(".boton .init").show();$(".boton .reinit").hide();$(".memoria article").css(apagado).find("span").css({display:"none"});claseDos="";claseUno="";contador=0;memoria=0;parDos="";parUno="";segundero=500;$(document).off("click",".memoria article")}function parejas(){$(this).css({background:"#f3f3f3"}).find("span").css({display:"block" });if(parUno===""){parUno=$(this).attr("data-pareja");claseUno=$(this).attr("class")}else{parDos=$(this).attr("data-pareja");claseDos=$(this).attr("class");if(parUno===parDos){$(".retro.msn").stop().removeClass("incorrecto");M.toast({html: 'Correcto!'});setTimeout(function(){$(".retro.msn").fadeOut()},15000);++memoria;func_memoria(memoria);claseUno="";claseDos=""}else{$(".retro.msn").stop().addClass("incorrecto");setTimeout(function(){$("."+claseUno+", ."+claseDos).css({background:"#84A215"}).find("span").css({display:"none"});claseUno="";claseDos="";$(".retro.msn").fadeOut()},15000)}parUno="";parDos=""}}function crono(){$(document).on("click",".memoria article",parejas);$(".memoria article").css(encendido);$(".boton .init").hide();$(".boton .reinit").show();segundero=500;}var claseUno="",claseDos="",memoria=0,parUno="",parDos="",contador=0,segundero=30,encendido={opacity:"1",cursor:"pointer"},apagado={background:"#84A215",opacity:"0.4",cursor:"inherit"};$(document).on("click","#reiniciar",reiniciar);$(document).on("click","#iniciar",crono);