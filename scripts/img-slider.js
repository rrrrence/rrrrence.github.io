var counter = 2;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 7500);

function reveal() {
    function revealItem(selector) {
        var reveals = document.querySelectorAll(selector);
        for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    
    revealItem(".fade-up");
    revealItem(".fade-left");
    revealItem(".fade-right");
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();