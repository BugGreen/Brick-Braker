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