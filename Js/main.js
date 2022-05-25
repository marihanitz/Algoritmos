

function validacion(dato){

    if ((dato>100) || (dato<1)){
        ingreso();
    }
    else{
        return dato;
    }
}

function ingreso (){
    let dato = parseFloat(prompt("Ingresa un número ENTERO entre 1 y 100")); 
    validacion(dato);
}



// Solicitar 3 numeros entre 1 y 100 y definir cual es el mayor

alert("Algoritmo para definir el número mayor");


let a = ingreso();
alert("ok");
console.log(a);

ingreso();
let b = validacion();
alert("ok");
console.log(b);

ingreso();
let c = validacion();
alert("ok");
console.log(c);



    if ((a>b) && (a>c)){

        alert("El número mayor es :  "+a);
    }

    else if  ((b>a) && (b>c)){
        
        alert("El número mayor es : "+ b);
    }

    else if ((a==b) && (b==c)){

        alert("Los números son iguales :"+ b);
    }

    else{
        alert("El número mayor es" +c);
    }



// alert("Algoritmo para definir el número menor");
// let d = parseFloat(prompt("Ingresa un número entre 1 y 100")); 
// let e = parseFloat(prompt("Ingresa un número entre 1 y 100")); 
// let f = parseFloat(prompt("Ingresa un número entre 1 y 100")); 


// if ((d<e) && (d<f)){
//     alert("El número menor es : " +d);
// }

// else if  ((e<d) && (e<f)){
    
//     alert("El número menor es : " +e);
// }

// else{
//     alert("El número menor es : "+ f);
// }





// // ALGORITMO 4
// alert("Algoritmo para definir si un número es múltiplo de 3");


// function ingreso (){
//     let a = parseFloat(prompt("Ingresa un número ENTERO entre 100 y 200")); 
//     validacion(a);
// }

// function validacion(a){
//     if ((  (a<100) || (a>200)) || (a%1!=0) ) {
//         ingreso();
//     }
//     else{
//         if (a%3==0){
//             alert("El número " +a+ " sí es múltiplo de 3")
//          }
//          else {
//              alert("El número " +a+ " no es múltiplo de 3")
//          }
         
//     }
// }

// ingreso();




// // ALGORITMO 5

// alert("Algoritmo para definir si un número es la suma de los otros dos números dados");


//     let a = parseFloat(prompt("Ingresa un número")); 
//     let b = parseFloat(prompt("Ingresa un número")); 
//     let c = parseFloat(prompt("Ingresa un número")); 


// let sumaab = a+b;
// let sumaac = a+c;
// let sumabc = b+c;


// if ( (sumaab==c) ) {
//     alert ("La suma de los dos primeros números ingresados es igual al último número ingresado "+ a+"+"+b+"="+c);
// }

// else if ( (sumaac==b)) {
//     alert ("La suma del primer y último número ingresado es igual al segundo número ingresado "+ a+"+"+c+"="+b);
// }

// else if ((sumabc==a) ) {
//     alert ("La suma de los últimos dos números ingresados es igual al primer número ingresado "+ b+"+"+c+"="+a);
// }

// else{
//     alert("Ninguno de los números ingresados es igual a la suma de los otros dos números");
// }






// // ALGORITMO 6

// alert("Algoritmo para definir si un número es par o impar");


//     let num = parseFloat(prompt("Ingresa un número"));

//     if ( (num%2==0) ) {
//         alert("El número " +num+ " es par")
//     }
           
//     else{
//         alert("El número " +num+ " es impar")
//      }
    










