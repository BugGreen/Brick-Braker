const canvas = document.getElementById( 'lienzo' );

//Esto permite 'colorear' el fondo:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#eeff00';

//Esto es para conseguir un contexto gráfico:
const ctx = canvas.getContext('2d');
ctx.strokeRect(20, 15, 100, 25 );
ctx.fillRect(20, 50, 100, 25);
ctx.fillStyle = 'orangered';
ctx.fillRect(20, 85, 100, 25);
ctx.fillStyle = '#ff4500';
ctx.fillRect(125, 85, 100, 25);
ctx.fillStyle = '#ff450050';
ctx.fillRect(230, 85, 100, 25);

