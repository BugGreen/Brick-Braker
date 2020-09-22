const canvas = document.getElementById( 'lienzo' );

//Esto permite 'colorear' el fondo:
canvas.style.backgroundColor = '#eeff00';

//Crear un nuevo atributo al objeto canvas:
canvas.resize = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
}

// limpia el canvas luego de que la bola pasa
canvas.clear = function ( ctx ) {
    ctx.fillStyle = this.style.backgroundColor;
    ctx.fillRect(
        0,
        0,
        this.width,
        this.height
    );
};

//Esto es para conseguir un contexto gráfico:
const ctx = canvas.getContext('2d');

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

let paused = false;

window.onkeydown = function ( e ) {
    e.preventDefault();

    paused = !paused;

    if ( !paused ) {
        window.requestAnimationFrame( drawGame );
    }
};

function drawGame() {

    if ( paused ) {
        return;
    }

    canvas.clear( ctx );

    wall.paint( ctx );
    ball.paint( ctx );

    window.requestAnimationFrame( drawGame );
}

function resize () {

  canvas.resize();
  wall.resize();
  ball.resize();

  drawGame();
};

resize();

//Cada vez que ocurre el suceso de redimensionamiento de ventana:
window.onresize = resize;

// Pinta el juego apenas es cargada la página:
window.requestAnimationFrame( drawGame );

