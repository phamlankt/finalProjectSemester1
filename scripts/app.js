function openmenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    console.log(display);

    if (display == "flex") {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header").style.setProperty("left", "0%");
        document.getElementById("footer").style.setProperty("left", "0%");
    } else {
        document.getElementById("menu_bar_nav").style.display = "flex";
        document.getElementById("header").style.setProperty("left", "254px");
        document.getElementById("footer").style.setProperty("left", "254px");
    }

}

function closemenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    console.log(display);

    if (display == "flex") {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header").style.setProperty("left", "0%");
        document.getElementById("footer").style.setProperty("left", "0%");
    }
}

window.addEventListener('click', function (e) {
    if (document.getElementById('menu_wrapper').contains(e.target)) {
        openmenu();

    } else {
        closemenu();
    }
});

