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

// Tamaño de ventana - #separaciones / #Bloques
let brickWidth = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
let brickHeight = brickWidth / 4;

function drawBrick( column, row ) {
    ctx.fillStyle = 'orangered';

    //Calcular la posición 'xPos' y 'yPos'
    //Con base en en column y row
    xPos = column * (brickWidth + gap);
    yPos = row * (brickHeight + gap);

    ctx.fillRect( xPos, yPos, brickWidth, brickHeight );
}

function drawRow( row ) {
    for ( let x = 0; x < bricksPerRow; x++ ) {
        drawBrick(x, row);
    }
}

function drawWall() {
    for (let y = 0; y < numRows; y++) {
        drawRow( y );
    }
}

function recomputeBrickSize() {
    //Primero redimensiona el Canvas:
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Acá se reajustan el tamaño de los ladrillos, que ahora son varibales:
    brickWidth = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
    brickHeight = brickWidth / 4;
}

function drawGame() {
    recomputeBrickSize();
    drawWall();
}

//Apenas el usuario se registra:
drawGame();
//Cada vez que ocurre el suceso de redimensionamiento de ventana:
window.onresize = drawGame;
