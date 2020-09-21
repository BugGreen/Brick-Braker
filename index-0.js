const canvas = document.getElementById( 'lienzo' );

//Esto permite 'colorear' el fondo:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#eeff00';

//Esto es para conseguir un contexto gráfico:
const ctx = canvas.getContext('2d');

const bricksPerRow = 8;
const numRows = 3;
const gap = 5;

const bricks = [];

function createWall() {
    for ( let row = 0; row < numRows; row ++) {
        for (let col = 0; col < bricksPerRow; col ++) {
            // Creaciçon del objeto brick para cada col:
            const brick = {
                // Atributos:
                c: col,
                r: row,
                w: 0,
                h: 0,
                color: 'orangered',
                //Métodos:
                paint: function () {
                    // this. nos permite referenciar las propiedades
                    // de este objeto.
                    const x = this.c * (this.w + gap);
                    const y = this.r * (this.h + gap);

                    ctx.fillStyle = this.color;
                    ctx.fillRect( x, y, this.w, this.h );
                },

                resize: function() {
                    this.w = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
                    this.h = this.w / 4;
                }

            };

            bricks.push( brick );
        }
    }
}

function drawBrick( column, row ) {
    const idx = row * bricksPerRow + column;

    bricks[ idx ].paint();
}

function drawRow( row ) {
    for ( let column = 0; column < bricksPerRow; column++ ) {
        drawBrick( column, row );
    }
}

function drawWall() {
    for (let row = 0; row < numRows; row++) {
        drawRow( row );
    }
}

function resizeBricks() {
    //Primero redimensiona el Canvas:
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Acá se reajustan el tamaño de los ladrillos, que ahora son varibales:
    for ( let row = 0; row < numRows; row++ ) {
        for (let col = 0; col < bricksPerRow; col ++) {
            const idx = row * bricksPerRow + col;
            bricks[ idx ].resize();
        }
    }
}

function drawGame() {
    resizeBricks();
    drawWall();
}

//Cada vez que ocurre el suceso de redimensionamiento de ventana:
window.onresize = drawGame;

// Crear la pared:
createWall();

// Pinta el juego apenas es cargada la página:
drawGame();

