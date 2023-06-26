window.onscroll = function() {compactNavbar()};

function compactNavbar() {
    const header = document.getElementById("nav");
    var winHeight = window.innerHeight - (6 * 16);
    var distanceScrolled = document.documentElement.scrollTop;

    if (distanceScrolled >= winHeight) {
        header.classList.add("scroll");
    } else if (distanceScrolled <=20) {
        header.classList.remove("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
}

const nav = document.getElementById("nav");

function toggleMenu() {
    if(!nav.classList.contains("open")) {
        nav.classList.add("open");
    } else {
        nav.classList.remove("open");
    }
}