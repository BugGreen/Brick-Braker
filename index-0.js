const canvas = document.getElementById( 'lienzo' );

//Esto permite 'colorear' el fondo:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#eeff00';

//Esto es para conseguir un contexto gráfico:
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = '15';
ctx.strokeStyle = 'red';
ctx.moveTo( 0, 0 );
ctx.lineTo( canvas.width, canvas.height );
ctx.stroke();