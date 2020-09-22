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
                    paint: function ( ctx ) {
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
                wall.bricks.push( brick );
            }
        }
    },

    paint: function ( ctx ) {
        // PROGRAMACIÓN FUNCIONAL:
        // Toma cada objeto Brick del array bricks
        // y lo pasa por el método paint.
        this.bricks.forEach( function ( brick ) {
            brick.paint( ctx );
        });
    },

    resize: function () {
        this.bricks.forEach( ( brick ) => brick.resize() );
    }
};

// La función createWall() ya no existe y es reemplazada por:

wall.init();
