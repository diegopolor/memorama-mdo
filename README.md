Juego-de-memoria-en-JS
======================

Juego de memoria en JS

Archivos para un juego de memoria de tarjetas con interactividad en JS
Estos archivos muestran un juego de 4 pares de tarjetas, se les puede aumentar la cantidad que sea necesaria


##index.html
Dentro del div `class='memoria'` se encuentran los pares de tarjetas, el atributo de las tarjetas que reconoce cuales hacen pareja es `data-pareja=''`, ese es el que hay que adaptar, así cómo la *class*, como en el siguiente ejemplo:
`<article class=unoUno data-pareja=uno></article>
<article class=ejemploUno data-pareja=ejemplo></article>
<article class=ponyUno data-pareja=pony></article>
`

##funciones.js
Modificar la condicional `if (memoria == 4)` que se encuentra en la función `func_memoria` de acuerdo al número de pares de tarjetas para reconocer cuando se hayan encontrado todos los pares y mostrar la alerta final.

Eso sería básicamente todo.
