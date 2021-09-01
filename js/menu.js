const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul")
const nav = document.getElementById("nav")

const displayNav = () => {
    if (navUL.style.visibility = "hidden") {
        navUL.style.visibility = "visible"
    } 
    navUL.style.visibility = "hidden";
};

const removeNav = () => navUL.style.visibility = "hidden";

hamburger.addEventListener('click', displayNav);
// hamburger.addEventListener('mouseout',removeNav);


