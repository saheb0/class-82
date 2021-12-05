var mouse_event="empty";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
var width=1;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouse_event="mousedown";  
}

canvas.addEventListener("mousemmove",mymousemove);
function mymousemove(e){
    var current_position_of_x=e.clientX-canvas.offsetLeft;
    var current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of x and y is");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y is");
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
 }
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouse_event="mouseup";  
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouse_event="mouseleave";  
}