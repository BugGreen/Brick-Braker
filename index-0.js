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

// Creación del objeto Ball:

const ball = {
  // Atributos:
    x: 0,
    y: 0,
    dx: 1, // Empieza el movimiento a la derecha.
    dy: 1, // Empieza el movimiento hacia abajo.
    r: 1,
    color: 'blue',

  // Métodos:
    resize: function() {
        this.x = ( window.innerWidth / 2 );
        this.y = ( window.innerHeight / 2 );
        this.r = ( window.innerWidth / 40 );
    },

    move: function () {
      this.x += this.dx;
      this.y += this.dy;
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

function drawGame() {

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

