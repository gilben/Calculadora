var images = document.getElementsByClassName('tecla');

var self = this;
var num1 = 0,
    num2, resultado, op;


for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mousedown", self.Down.bind(self));
    images[i].addEventListener("mouseup", self.Up.bind(self));

}



function Down(event) {

    event.target.style.padding = "1px";
    var targetid, idactual, cont, num1, num2;
    targetid = event.currentTarget.id;
    var actualid = document.getElementById('display').innerHTML;
    Agreganumeros(actualid, targetid);
    LimpiarPantalla(targetid);
    capturarDatos(targetid);


    //Caluladora.Calcular(actualid, targetid);
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
        num1 = 0;
        num2 = 0;
        resultado = 0;


    }

}


function capturarDatos(targetid) {

    if (isNaN(targetid)) {
        if (num1 == 0) {
            num1 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;
            op = targetid;
          
        }else if(targetid=='igual'){
            num2 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML= operaciones(op,num1,num2);
        }

    } else {

    }

   

}




function operaciones(operacion, num1, num2) {

    switch (operacion) {
        case 'mas':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case 'por':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case 'menos':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case 'dividido':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;

    }

    return (resultado)

    /*if (operacion == 'mas') {


        if (num1 == 0) {
            num1 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;

        } else {

            var numActual = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;
            resultado = parseFloat(num1) + parseFloat(numActual);
            document.getElementById('display').innerHTML = resultado;
            console.log(num1);
        }

    } else if (operacion == 'igual') {
        num2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(num1) + parseFloat(num2);
        document.getElementById('display').innerHTML=resultado;
        num1 = 0;
        num2 = 0;
    }

    
    
    
    
    
    
     if (operacion == 'por') {


        if (num1 == 0) {
            num1 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;

        } else {

            var numActual = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;
            resultado = parseFloat(num1) * parseFloat(numActual);
            document.getElementById('display').innerHTML = resultado;
            console.log(num1);
        }

    } else if (operacion == 'igual') {
        num2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(num1) * parseFloat(num2);
        
        num1 = 0;
        num2 = 0;
    }
    
    console.log(resultado);
    
    */

    /*
    switch (operacion) {
        case 'mas':
            num1 = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = 0;
            break;
        case 'menos':
            document.getElementById('display').innerHTML = 'menosss';
            alert(num1);
            break;
        case 'igual':
            num2 = document.getElementById('display').innerHTML;
            suma = num1 + num2;
            document.getElementById('display').innerHTML = suma;

            break;
    }
*/

}



/*
este es el codigo que no me funciona, estoy intentando meter en patron modulo, 
var Caluladora = (function (num,targetid) {

    var num;
    var target;

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


    };

    return {
        Calcular: function () {
            Agreganumeros(num, targetid);
        }
    }

}());
*/
