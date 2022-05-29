function mouseTracking(e) {
  let mouse = document.querySelector("#mouse");
//   console.log(MouseEvent.screenX);
  mouse.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        };

function mouseBig(){
    let x = 1;
    console.log(x);
    let mouse = document.querySelector("#mouse");
    mouse.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;","scale:2")
        };


function init() {
    let mouseOn = document.querySelectorAll('.mouseon');
  window.addEventListener("mousemove", mouseTracking, false);
  for(let i=0; i<mouse.length;i++){
    mouseOn[i].addEventListener("mouseover",mouseBig, false);
  }
//   console.log(mouseOn[0]);
}
window.addEventListener("load", init, false);
