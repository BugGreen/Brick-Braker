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
    //paddle.paint( ctx );

    window.requestAnimationFrame( drawGame );
}

function resize () {

  canvas.resize();
  wall.resize();
  ball.resize();

  drawGame();
};

// Initial resize:
resize();

// Cada vez que ocurre el suceso de redimensionamiento de ventana:
window.onresize = resize;

// Pinta el juego apenas es cargada la página:
window.requestAnimationFrame( drawGame );

