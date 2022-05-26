function validacion(dato){

    if ((dato>100) || (dato<1)){
        ingreso();
    }
    else{
        num = dato;
    }
    return num;
}

function ingreso ( ){
    let dato = parseFloat(prompt("Ingresa un número ENTERO entre 1 y 100")); 
    validacion(dato);
    return num;
}


function Algoritmo1 (){
    // Solicitar 3 numeros entre 1 y 100 y definir cual es el mayor

    alert("Algoritmo para definir el número mayor");

    let num = 0;
    let a = ingreso( );
    alert("ok");
   

    let b = ingreso();
    alert("ok");
    

    let c = ingreso();
    alert("ok");
   


        if ((a>b) && (a>c)){

            alert("El número mayor es : "+a);
        }

        else if  ((b>a) && (b>c)){
            
            alert("El número mayor es : "+ b);
        }

        else if ((a==b) && (b==c)){

            alert("Los números son iguales : "+ b);
        }

        else{
            alert("El número mayor es : " +c);
        }

}


function Algoritmo2 (){
    alert("Algoritmo para definir el número menor");
    let num = 0;
    let d = ingreso( );
    alert("ok");
    

    let e = ingreso();
    alert("ok");
    

    let f = ingreso();
    alert("ok");
    

    if ((d<e) && (d<f)){
        alert("El número menor es : " +d);
    }

    else if  ((e<d) && (e<f)){
        
        alert("El número menor es : " +e);
    }

    else if ((e==d) && (e==f)){

        alert("Los números son iguales : "+ b);
    }

    else{
        alert("El número menor es : "+ f);
    }
}



function Algoritmo4(){
    // ALGORITMO 4
    alert("Algoritmo para definir si un número es múltiplo de 3");


    function ingreso1 (){
        let a = parseFloat(prompt("Ingresa un número ENTERO entre 100 y 200")); 
        validacion1(a);
    }

    function validacion1(a){
        if ((  (a<100) || (a>200)) || (a%1!=0) ) {
            ingreso1();
        }
        else{
            if (a%3==0){
                alert("El número " +a+ " sí es múltiplo de 3")
            }
            else {
                alert("El número " +a+ " no es múltiplo de 3")
            }
            
        }
    }

    ingreso1();

}


function Algoritmo5() {
    // ALGORITMO 5

    alert("Algoritmo para definir si un número es la suma de los otros dos números dados");


        let a1 = parseFloat(prompt("Ingresa un número")); 
        let b1 = parseFloat(prompt("Ingresa un número")); 
        let c1 = parseFloat(prompt("Ingresa un número")); 


    let sumaab = a1+b1;
    let sumaac = a1+c1;
    let sumabc = b1+c1;


    if ( (sumaab==c1) ) {
        alert ("La suma de los dos primeros números ingresados es igual al último número ingresado "+ a1+"+"+b1+"="+c1);
    }

    else if ( (sumaac==b1)) {
        alert ("La suma del primer y último número ingresado es igual al segundo número ingresado "+ a1+"+"+c1+"="+b1);
    }

    else if ((sumabc==a1) ) {
        alert ("La suma de los últimos dos números ingresados es igual al primer número ingresado "+ b1+"+"+c1+"="+a1);
    }

    else{
        alert("Ninguno de los números ingresados es igual a la suma de los otros dos números");
    }

    }



function Algoritmo6() {
    // ALGORITMO 6

    alert("Algoritmo para definir si un número es par o impar");


        let nume = parseFloat(prompt("Ingresa un número"));

        if ( (nume%2==0) ) {
            alert("El número " +nume+ " es par")
        }
            
        else{
            alert("El número " +nume+ " es impar")
        }
        
    }


    Algoritmo1();
    Algoritmo2();
    Algoritmo4();
    Algoritmo5();
    Algoritmo6();









