// Creación del objeto Ball:

const ball = {
    // Atributos:
    x: ( window.innerWidth / 2 ),
    y: ( window.innerHeight / 2 ),
    dx: 1, // Empieza el movimiento a la derecha.
    dy: 1, // Empieza el movimiento hacia abajo.
    r: 0,
    color: 'blue',

    // Métodos:
    resize: function() {
        this.r = ( window.innerWidth / 40 );
    },

    // Que debe hacer cuando toque los bordes:
    checkBounds: function() {
        const left = this.x - ( this.r / 2 );
        const right = this.x + ( this.r / 2 );
        const top = this.y - ( this.r / 2 );
        const bottom = this.y + ( this.r / 2 );

        if ( left <= 0 )             this.dx = -this.dx;
        if ( right >= canvas.width ) this.dx = -this.dx;
        if ( top <= 0 )              this.dy = -this.dy;
        if ( bottom >= canvas.height ) this.dy = -this.dy;

    },
    move: function () {
        this.x += this.dx;
        this.y += this.dy;

        this.checkBounds();
    },

    paint: function ( ctx ) {
        ctx.fillStyle = this.color;

        // dibujo de la bola
        ctx.beginPath();
        ctx.arc(
            this.x, // Pos x
            this.y, // Pos y
            this.r, // Radio
            0, // Inicio del ángulo del arco
            2 * Math.PI, //Final del ángulo del arco
        );
        ctx.fill();
        ctx.closePath();

        this.move();
    },
};