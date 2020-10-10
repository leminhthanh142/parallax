let flag = false;
let bar2 = document.querySelector(".bar-2");
console.log(bar2);
const toggleMainNav = () => {
    flag = !flag;
    if (flag === true) {
        document.getElementById("main-nav").style.right= "0";
        bar2.style.opacity = "0";
        bar2.classList.remove("animate-bar");
    }
    else {
        document.getElementById("main-nav").style.right= "-300px";
        bar2.style.opacity = "1";
        bar2.classList.add("animate-bar");
    }
}