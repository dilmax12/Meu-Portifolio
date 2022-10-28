myinterval = setInterval(setImage, 2000);

function setImage() {
    let x = document.querySelector(".right__side");
    x.style.backgroundImage = x.style.backgroundImage == 'url("./assets/images/Hero2.png")' ? 'url("./assets/images/Hero.png")' : 'url("./assets/images/Hero2.png")';
}
document.querySelector(".right__side").style.backgroundImage = 'url("./assets/images/Hero.png")'

var menuOpn = document.querySelector(".menu");
var menuButton = document.querySelector(".menu__hiden");

function menuOpener() {

    if (menuButton.style.display === "flex") {
        menuButton.style.display = "none";
    }else {
        menuButton.style.display = "flex";
    }
}


menuOpn.addEventListener("click", menuOpener);