var canvas,ctx,color,lastXPos,lastYPos,width,new_width,new_height,width_of_screen;
width_of_screen=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
color="black";
width=1;

canvas=document.getElementById("mycanvas");
if(width_of_screen<992)
    {
canvas.width=new_width;
canvas.height=new_height;
document.body.style.overflow="hidden";
    }
    
ctx=canvas.getContext("2d");
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    console.log("touchstart");
    color=document.getElementById("color").value;
    width=document.getElementById("linewidth").value;
    lastXPos=e.touches[0].clientX-canvas.offsetLeft;
    lastYPos=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    console.log("touchmove")
   var currentXPos,currentYPos;
   currentXPos=e.touches[0].clientX-canvas.offsetLeft;
   currentYPos=e.touches[0].clientY-canvas.offsetTop;
  
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       console.log("last X position="+lastXPos);
       console.log("last Y position"+lastYPos);
       ctx.moveTo(lastXPos,lastYPos);
       console.log("Current X position="+currentXPos);
       console.log("Current Y position"+currentYPos);
       ctx.lineTo(currentXPos,currentYPos);
       ctx.stroke();
   
   lastXPos=currentXPos;
   lastYPos=currentYPos;
  
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}