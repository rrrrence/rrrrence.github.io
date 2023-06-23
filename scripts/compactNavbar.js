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