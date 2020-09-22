const canvas = document.getElementById( 'lienzo' );

//Esto permite 'colorear' el fondo:
canvas.style.backgroundColor = '#eeff00';

//Crear un nuevo atributo al objeto canvas:
canvas.resize = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
}

//Esto es para conseguir un contexto gráfico:
const ctx = canvas.getContext('2d');

// Ahora Wall es un objeto:

const wall = {
    bricksPerRow: 8,
    numRows: 3,
    gap: 5,

    bricks: [],

    init: function () {
        for ( let row = 0; row < this.numRows; row++ ){
            for (let column = 0; column < this.bricksPerRow; column++ ){
                const brick = {
                    // Atributos:
                    c: column,
                    r: row,
                    w: 0,
                    h: 0,
                    color: 'orangered',
                    visible: true,

                    //Métodos:
                    paint: function () {
                        if (this.visible){
                            // this. nos permite referenciar las propiedades
                            // de este objeto.
                            const x = this.c * (this.w + wall.gap);
                            const y = this.r * (this.h + wall.gap);

                            ctx.fillStyle = this.color;
                            ctx.fillRect( x, y, this.w, this.h );
                        }
                        else {
                          // No aún
                        }

                    },

                    resize: function() {
                        this.w = (window.innerWidth - (wall.bricksPerRow - 1) * wall.gap) / wall.bricksPerRow;
                        this.h = this.w / 4;
                    }

                };

                //Seguimos dentro del for:
                this.bricks.push( brick );
            }
        }
    },

    paint: function () {
        // PROGRAMACIÓN FUNCIONAL:
        // Toma cada objeto Brick del array bricks
        // y lo pasa por el método paint.
        this.bricks.forEach( function ( brick ){
            brick.paint();
        });
    },

    resize: function () {
        this.bricks.forEach( ( brick ) => brick.resize() );
    }
};

// La función createWall() ya no existe y es reemplazada por:

wall.init();

function drawGame() {
    canvas.resize();
    wall.resize();
    wall.paint();
}

//Cada vez que ocurre el suceso de redimensionamiento de ventana:
window.onresize = drawGame;

// Pinta el juego apenas es cargada la página:
drawGame();

