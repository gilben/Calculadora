var images = document.getElementsByClassName('tecla');
var self = this;
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mousedown", self.Down.bind(self));
    images[i].addEventListener("mouseup", self.Up.bind(self));

}


function Down(event) {


    event.target.style.padding = "1px";
    var targetid, idactual, cont, num1, num2;
    targetid = event.currentTarget.id;
    actualid = document.getElementById('display').innerHTML;
    Agreganumeros(actualid, targetid);
    LimpiarPantalla(targetid);
    operaciones(targetid);

}


function Up(event) {
    event.target.removeAttribute('style');
}



function Agreganumeros(num, targetid) {

    if (num.length < 8) {
        if (!isNaN(targetid)) {

            if (num == '0') {
                document.getElementById('display').innerHTML = targetid;
                cont = targetid;
            } else {
                document.getElementById('display').innerHTML += targetid;
                cont += targetid
            }

        } else if (targetid == 'punto') {

            if (num.indexOf('.') != -1) {

            } else {
                document.getElementById('display').innerHTML += '.';
                cont += targetid
            }

        }
    }


}



function LimpiarPantalla(tecla) {
    if (tecla == 'on') {
        document.getElementById('display').innerHTML = 0;
    }

}





function operaciones(operacion) {
    var num1, num2, suma;

    switch (operacion) {
        case 'mas':
            num1 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;
            break;
        case 'menos':
            document.getElementById('display').innerHTML = 'menosss';
            break;
        case 'igual':
             num2 = document.getElementById('display').innerHTML;
            suma=num1+num2;
             document.getElementById('display').innerHTML=suma;
            
            break;
    }

    console.log(num1);
}

/*var Calculadora = (function () {

    var images = document.getElementsByClassName('tecla');
    var self = this;


    function Down(event) {
        event.target.style.padding = "1px";
        var targetid, idactual, cont, x;
        targetid = event.currentTarget.id;
        actualid = document.getElementById('display').innerHTML;
        Agreganumeros(actualid, targetid);
        LimpiarPantalla(targetid);

    }

    function Up(event) {
        event.target.removeAttribute('style');
    }

    return {
        hola: function () {
            for (var i = 0; i < images.length; i++) {
                images[i].addEventListener("mousedown", self.Down.bind(self));
                images[i].addEventListener("mouseup", self.Up.bind(self));
            }
           
        }
    };


})();

Calculadora.hola();*/


/*
var modulo = (function () {
  var contador = 0;
 
  return {
    incrementar: function () {
      return counter++;
    },
 
    reset: function () {
      console.log( "valor de contador antes del reset: " + counter );
      counter = 0;
    }
  };
})();
 
// Incrementa el contador

// Imprime el valor del contador
modulo.reset();
*/
