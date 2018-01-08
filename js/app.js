var images = document.getElementsByClassName('tecla');

var self = this;
var targetid;
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
    CambiarSigno(targetid, actualid);



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

    if (targetid == 'mas' || targetid == 'menos' || targetid == 'por' || targetid == 'mas' || targetid == 'dividido' || targetid == 'igual') {
        if (targetid !== 'igual') {
            num1 = parseFloat(document.getElementById('display').innerHTML);
            document.getElementById('display').innerHTML = 0;
            op = targetid;

        } else {
            num2 = document.getElementById('display').innerHTML;
            resultado = operaciones(op, num1, num2).toString().substr(0, 8);
            document.getElementById('display').innerHTML = resultado;

        }

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


}





function CambiarSigno(targetid, numero) {


    if (targetid == 'sign') {

        resultado = parseFloat(numero) * -1;
        document.getElementById('display').innerHTML = resultado;
        console.log(resultado);

    }



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
