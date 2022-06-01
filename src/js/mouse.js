function mouseTracking(e) {
  let mouse = document.querySelector(".mouse");
  mouse.style="top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;";
};

function mouseBig(e) {
  // let x = 1;
  // console.log(x);
  let mouse = document.querySelector(".mouse");
  mouse.classList.add('mouseClickani');
};

function mouseReset() {
  let mouse = document.querySelector(".mouse");
  mouse.classList.remove('mouseClickani');
  mouse.classList.remove('mouseScale');

};
function mouseScale() {
  let mouse = document.querySelector(".mouse");
  mouse.classList.remove('mouseClickani');
  mouse.classList.add('expand');
}
function mouseScaleonly(){
   // let x = 1;
  // console.log(x);
  let mouse = document.querySelector(".mouse");
  mouse.classList.add('mouseScale');


};
function init() {
  let mouseOn = document.querySelectorAll('.mouseOn');
  let mouseHover = document.querySelectorAll('.mouseHover');
  console.log(mouseHover);
  window.addEventListener("mousemove", mouseTracking, false);
  // window.addEventListener("scroll", mouseTracking, false);
  for (let i = 0; i < mouseOn.length; i++) {
    mouseOn[i].addEventListener("mouseover", mouseBig, false);
    mouseOn[i].addEventListener("mouseout", mouseReset, false);
    mouseOn[i].addEventListener("click", mouseScale, false);
  }
  for (let i = 0; i < mouseHover.length; i++) {
    mouseHover[i].addEventListener("mouseover", mouseScaleonly, false);
    mouseHover[i].addEventListener("mouseout", mouseReset, false);
  }
  // console.log(mouseOn[0]);

}
window.addEventListener("load", init, false);
