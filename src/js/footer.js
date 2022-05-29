//回到top的js
let btn = document.getElementById("b_top");

window.addEventListener(
    "scroll",
    function () {
        // console.log(window.scrollY);
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    },
    false
);
// console.log(btn);
btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});