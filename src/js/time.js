function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.strokeStyle = 'gray';

    context.lineWidth = 3;


    context.moveTo(500, 100);
    context.lineTo(500, 700);

    context.closePath();

    context.moveTo(100, 300);
    context.lineTo(500, 300);

    context.moveTo(100, 600);
    context.lineTo(500, 600);

    context.moveTo(900, 200);
    context.lineTo(500, 200);

    context.moveTo(900, 500);
    context.lineTo(500, 500);






    context.fill();
    context.stroke();








}
window.addEventListener('load', doFirst);