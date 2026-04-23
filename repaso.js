//Parte 2 - Funcion princial
function mostrar(opcion) {
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            imprimirCentenas();
            break;
        case 3:
            imprimirCentenasRegresivo();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            mostrarTabla();
            break;
         default:
            break;
    }
}

//Parte 3: Primer ejercicio
function ejercicio1() {
    for (let i = 1; i <= 5; i++)
        console.log(i);
}

//*4.1 Imprimir centenas
function ejercicio2() {
    for (let i = 100; i <= 1000; i += 100)
        console.log(i);
}

//*4.2. Imprimir regresivo
function ejercicio3() {
    for (let i = 1000; i >= 800; i -= 100) {
        console.log(i);
    }
}

//Parte 3 - Mensaje con restricciones
function mostrarMensaje1() {
    for (let i = 5; i < 8; i++)
        console.log("mensaje restringido");
}

function mostrarMensaje2() {
    for (let i = 0; i <= 12; i += 2)
        console.log("mensaje restringido");
}

function mostrarMensaje3() {
    for (let i = 0; i < 3; i++)
        console.log("mensaje restringido");
}

function mostrarMensaje4() {
    for (let i = 8; i > 11; i++)
        console.log("mensaje restringido");
}

//* Parte 4 - Tabla
function mostrarTabla(){ 
  for(let i=1; i <= 10;i++){ 
    console.log("3 x "+i+" = "+(3*i)); 
  }
}