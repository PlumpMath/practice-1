/**
 * Created by amyqing719@gmail.com on 16/01/2017.
 */
// var canvas_width=200;
// var canvas_height = 200;
// var mycanvas,context,ctx;
// window.onload = function(){
//     creacteCanvas();
//     drawRect();
// }
//
// function creacteCanvas(){
//     var canvas = document.getElementById('mycanvas');
//     ctx = canvas.getContext('2d');
// }
//
// function drawRect(){
//     ctx.fillStyle="f00";
//
// }

function draw (id) {
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context  = canvas.getContext("2d");
    context.fillStyle = "#eeeeef";
    context.fillRect(0,0,600,700);
    for(var i=0;i<=10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.25)";
        context.fill();
    }
}