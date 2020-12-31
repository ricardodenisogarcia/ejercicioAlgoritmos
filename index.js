var laLista = [];
for (     var posicion = 0 ;     posicion < 40 ;     posicion++ ){
     var random = Math.random ();
     var randommulti = random * 1000 ;
     var randomEntero = Math.floor(randommulti);
     laLista.push(randomEntero);
}

//console.log(laLista);

function Burbuja() {
    var lista = laLista
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}

console.log(Burbuja(laLista));