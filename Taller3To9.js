// Taller #3:
const d = [1, 2, , 3, 4, 5];
console.log( d[2] ); // undefined
// Taller #4:
console.log( d.length ); // 6

// Taller #5:
const a = [ 1, 2, 3];
a.length = 0;
console.log( a );
console.log( a[0] ); // undefined

// Taller #6:

const c = [];

c[ 0 ] = 1;
c[ 99 ] = 1;

console.log( c.length ); // 100

// Taller #7:
const b = [ 1, 2, , 3, 4];

const x = b.pop(); // .pop() quita y retorna el último elemento de b,
                   // en este caso quita 4 y retorna 4.
console.log( x ); // 4
console.log( b ); // [ 1, 2, <1 empty item>, 3 ], notar que ya no está 4.

const y = b.push( 5 ); // .pop(value) añande al final de b el parámetro
                       // pasado y retorna la nueva longitud de b

console.log( y ); // 5
console.log( b ); // [ 1, 2, <1 empty item>, 3, 5 ]

b.shift(); // .shift() quita y retorna el primer elemento, es decir 1
b.unshift( 9 ); // .unshift( value ) agrega al principio del array b
                      // el parámetro paasado por .unshift() en este caso, 9

b.sort(); // Ordena el array b. por default, el métotdo sort() ordena los valores
          // COMO STRINGS de manera alfabética y ascendente.

console.log( b ); //[ 2, 3, 5, 9, <1 empty item> ]

// Taller #8:
const array = [ 1, 30, 4, 21, 100000 ];
array.sort();

console.log( array ); // [ 1, 100000, 21, 30, 4 ]

// Taller #9:

array.sort(function( a, b)
{
    return a -b;
});

(function backWards() {
    for (i = array.length - 1; i > 0; i--) {
        console.log(array[i]);
    }
}) ();
